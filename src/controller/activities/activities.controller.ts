import {Controller, Get, HttpException, InternalServerErrorException, Param} from '@nestjs/common';
import { ActivitiesService } from '../../service/activities/activities.service';
import { ActivitiesDto } from '../../dto/activities.dto';
import {throwError} from "rxjs";
import {ApiBody, ApiNotFoundResponse, ApiOkResponse} from "@nestjs/swagger";

@Controller('/api/v1/activities')
export class ActivitiesController {
  constructor(private activitiesService: ActivitiesService) {}

  @Get('')
  @ApiOkResponse({description: 'Activities payloads'})
  getActivities(): any {
    try{
      return this.activitiesService.getAllActivities().then((activity) => {
        if(!activity){
          return ActivitiesController.handleError(Error(), 'err.get.activities', 'Failed to get activities');
        }
        return activity
      })
    }
    catch (e){
      return ActivitiesController.handleError(e, 'err.unknow', '');
    }
  }

  @Get(':id')
  @ApiBody({type: ActivitiesDto})
  @ApiNotFoundResponse({description: 'Activity not found'})
  @ApiOkResponse({description: 'Activity payload'})
  getActivitiesById(@Param('id') id): any {
    try{
      return this.activitiesService.getActivitiesById(id).then((activity) => {
        if(!activity){
          return ActivitiesController.handleError(Error(), 'err.get.activity.'+id, 'Failed to get activity ' + id);
        }
        return activity
      })
    }
    catch (e){
      return ActivitiesController.handleError(e, 'err.unknow', '');
    }
  }

  private static handleError(error: Error, code: string, defaultMessage: string) {
    const objectOrError = { code, message: defaultMessage, detail: error };
    throw error instanceof HttpException
        ? error
        : new InternalServerErrorException(objectOrError, error.message);
  }
}
