import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { environment } from '../../../environment';
import { ActivitiesDto } from '../../dto/activities.dto';

// Firebase Config
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
const currentUser = 'VXq4OUKqx1ZxxfciCrBCGwOzvGM2'; // Will change

@Injectable()
export class ActivitiesService {
    // Get all activities from firestore
  async getAllActivities(startDate: string,endDate:string): Promise<FirebaseFirestore.DocumentData[] | ActivitiesDto[]> {
    return await db
      .collection('activities')
      .where('user', '==', currentUser)
      .where('start_date_local', '>=',  Date.parse(startDate))
      .where('start_date_local', '<=',  Date.parse(endDate))
      .get()
      .then((docs) => {
        return docs.docs.map((doc) => doc.data());
      });
  }
    // Get activities by id from firestore
    async getActivitiesById(id: string): Promise<ActivitiesDto> {
    return await db
      .collection('activities')
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          return this.convertToDto(doc.data());
        }
      });
  }
  // Save activities in firestore DB
   saveActivities(activity): any {
       db.collection('activities')
           .doc(activity.upload_id_str
           .toString())
           .get()
           .then((doc) => {
        if (doc.exists) {
          console.log( "exist") // change that
        }else{
          db.collection('activities')
              .doc(activity.upload_id_str
              .toString())
              .set({
                name: activity.name,
                distance: activity.distance,
                elapsed_time: activity.elapsed_time,
                moving_time: activity.moving_time,
                start_date_local: activity.start_date_local,
                score: activity.score,
                user: currentUser,
          });
        }
      });
  }


  private convertToDto(activities): ActivitiesDto {
    return new ActivitiesDto(
      activities.upload_id_str,
      activities.name,
      activities.distance,
      activities.elapsedTime,
      activities.moving_time,
      activities.type,
      activities.start_date_local,
      activities.score,
    );
  }
}
