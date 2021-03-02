import {HttpModule, Module} from '@nestjs/common';
import { UserController } from './controller/user/user.controller';
import { UserService } from './service/user/user.service';
import { ActivitiesService } from './service/activities/activities.service';
import { ActivitiesController } from './controller/activities/activities.controller';
import { StatsController } from './controller/stats/stats.controller';
import { StatsService } from './service/stats/stats.service';
import { StravaController } from './controller/strava/strava.controller';
import { StravaService } from './service/strava/strava.service';

@Module({
  imports: [HttpModule],
  controllers: [UserController, ActivitiesController, StatsController, StravaController],
  providers: [UserService, ActivitiesService, StatsService, StravaService],
})
export class AppModule {}
