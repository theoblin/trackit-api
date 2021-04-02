import {
    Controller,
    Get,
    Query,
    Redirect,
    Res,
    HttpService,
    HttpException,
    InternalServerErrorException
} from '@nestjs/common';
import {Response} from "express";
import {environment} from "../../../environment";
import {StravaService} from "../../service/strava/strava.service";
import {ActivitiesService} from "../../service/activities/activities.service";

@Controller('/api/v1/strava')
export class StravaController {

    constructor(private httpService: HttpService,
                private stravaService: StravaService,
                private activitiesService: ActivitiesService) {}

    // Redirect to Strava AuthScreen
    @Get('/connect')
    @Redirect()
    connect(@Res() res: Response): any {
        try{
            return {
                url:
                environment.AUTHSCREENLINK,
            };
        }
        catch(e){
            return StravaController
                .handleError(e, 'err.redirection', 'Failed to redirect');
        }
    }
    //get response code from strava Authscreen
    @Get('/responsecode')
    getCode(@Query("code") code): any {
        try{
            this.httpService
                .post(environment.TOKENLINK,
                {client_id: environment.CLIENTID, client_secret: environment.CLIENTSECRET,
                    grant_type: 'authorization_code',
                    code: code})
                .subscribe((e) => this.stravaService
                    .saveTokens(e.data.access_token,e.data.refresh_token))
        }
        catch(e){
            return StravaController
                .handleError(e, 'err.get.reponse-code', 'Failed to get response code');
        }
    }
    // Get ALl activities from strava API
    @Get('/activities')
      async getAllActivities(@Query("token") token) {
        try{
            return  this.stravaService
                .getActivities(token)
        }
        catch(e){
            console.log(e)
        }
    }
    // Synchronize STRAVA API with trackit app firebase db
    @Get('/sync')
     async syncActivities(@Query("token") token) {
       await this.stravaService
           .getActivities(token)
           .subscribe(e => e
               .forEach(a => this.activitiesService.saveActivities(a)))
    }

    private static handleError(error: Error, code: string, defaultMessage: string) {
        const objectOrError = { code, message: defaultMessage, detail: error };
        throw error instanceof HttpException
            ? error
            : new InternalServerErrorException(objectOrError, error.message);
    }
}

