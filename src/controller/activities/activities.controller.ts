import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ActivitiesService } from '../../service/activities/activities.service';
import { ActivitiesDto } from '../../dto/activities.dto';

@Controller('/api/v1/activities')
export class ActivitiesController {
  constructor(private activitiesService: ActivitiesService) {}

  @Get('')
  getActivities(): any {
    try {
      return this.activitiesService.getAllActivities();
    } catch (e) {
      console.log(e);
      return e;
    }
  }

  @Get(':id')
  getActivitiesById(@Param('id') id): Promise<ActivitiesDto> {
    try {
      return this.activitiesService.getActivitiesById(id);
    } catch (e) {
      console.log(e);
      return e;
    }
  }
}
