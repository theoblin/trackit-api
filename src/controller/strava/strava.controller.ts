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

@Controller('/api/v1/strava')
export class StravaController {

    constructor(private httpService: HttpService, private stravaService: StravaService) {}

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
            return StravaController.handleError(e, 'err.redirection', 'Failed to redirect');
        }
    }
    @Get('/responsecode')
    getCode(@Query("code") code): any {
        try{
            this.httpService.post(environment.TOKENLINK,
                {client_id: environment.CLIENTID, client_secret: environment.CLIENTSECRET,
                    grant_type: 'authorization_code',
                    code: code}).subscribe((e) => this.stravaService.saveTokens(e.data.access_token,e.data.refresh_token  ))
        }
        catch(e){
            return StravaController.handleError(e, 'err.get.reponse-code', 'Failed to get response code');
        }
    }
    @Get('/activities')
      async getAllActivities(@Query("token") token) {
        try{
            return  this.stravaService.getActivities(token)
        }
        catch(e){
            return StravaController.handleError(e, 'err.get.activities', 'Failed to get activities from strava API');
        }
    }

    @Get('/sync')
    async syncActivities(@Query("token") token) {
        return  this.stravaService.getActivities(token)
    }

    private static handleError(error: Error, code: string, defaultMessage: string) {
        const objectOrError = { code, message: defaultMessage, detail: error };
        throw error instanceof HttpException
            ? error
            : new InternalServerErrorException(objectOrError, error.message);
    }
}

