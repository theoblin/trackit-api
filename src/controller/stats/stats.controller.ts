import { Controller, Get } from '@nestjs/common';
import { ActivitiesService } from '../../service/activities/activities.service';
import { StatsService } from '../../service/stats/stats.service';

@Controller('/api/v1/stats')
export class StatsController {
  constructor(private statsService: StatsService) {}

  @Get('')
  getAllStats(): any {
    try {
      return this.statsService.getStats();
    } catch (e) {
      console.log(e);
      return e;
    }
  }
}
