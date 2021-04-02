import {Controller, Get, HttpException, InternalServerErrorException, Query} from '@nestjs/common';
import { ActivitiesService } from '../../service/activities/activities.service';
import { ActivitiesDto } from '../../dto/activities.dto';
import {ApiBody, ApiNotFoundResponse, ApiOkResponse} from "@nestjs/swagger";

@Controller('/api/v1/activities')

export class ActivitiesController {

  constructor(private activitiesService: ActivitiesService) {}

  // Get all activities
  @Get('')
  @ApiOkResponse({description: 'Activities payloads'})
  getActivities(@Query('startDate')startDate: string,
                @Query('endDate')endDate:string ): any {
    try{
      return this.activitiesService.getAllActivities(startDate, endDate).then((activity) => {
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

  // Get an activity by ID
  @Get(':id')
  @ApiBody({type: ActivitiesDto})
  @ApiNotFoundResponse({description: 'Activity not found'})
  @ApiOkResponse({description: 'Activity payload'})
  getActivitiesById(@Query('id') id): any {
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
