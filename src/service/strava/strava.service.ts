import {HttpService, Injectable} from '@nestjs/common';
import * as admin from "firebase-admin";
import {environment} from "../../../environment";
import {map} from "rxjs/operators";
import { AxiosResponse } from 'axios';
import {ActivitiesDto} from "../../dto/activities.dto";

if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert({
            clientEmail: environment.firebase2.client_email,
            privateKey: environment.firebase2.private_key,
            projectId: environment.firebase2.project_id,
        }),
        databaseURL: environment.DATABASEURL,
    });
}
const db = admin.firestore();
const currentUser = 'VXq4OUKqx1ZxxfciCrBCGwOzvGM2';

@Injectable()
export class StravaService {

    constructor(private httpService: HttpService) {}

    saveTokens(accessToken: string, refreshToken: string): any {
        db.collection('users').doc(currentUser).update({
            access_token: accessToken,
            refresh_token: refreshToken,
            lastSync: new Date()
        });
    }
    async getActivities(token: string): Promise<any> {
        return  this.httpService.get<any>(environment.ACTIVITIESLINK + token).pipe(
            await map((axiosResponse: AxiosResponse) => {
                let activities = [];
                axiosResponse.data.map((activity) =>{
                    activities.push(
                        new ActivitiesDto(
                        activity.upload_id_str,
                        activity.name,
                        activity.distance,
                        activity.elapsed_time,
                        activity.moving_time,
                        activity.type,
                        new Date(activity.start_date_local).getTime(),
                        this.scoreCalculator(activity.distance, activity.moving_time / 60),
                        )
                    )
                })
                return  activities;
            })
        );
    }

    scoreCalculator(distance: number, time: any): number{
        const kmh = (distance ) / time;
        const score = kmh + time ;
        return score.toFixed(2) ;
    }
}
