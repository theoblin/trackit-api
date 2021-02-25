import { Module } from '@nestjs/common';
import { UserController } from './controller/user/user.controller';
import { UserService } from './service/user/user.service';
import { ActivitiesService } from './service/activities/activities.service';
import { ActivitiesController } from './controller/activities/activities.controller';
import { StatsController } from './controller/stats/stats.controller';
import { StatsService } from './service/stats/stats.service';

@Module({
  imports: [],
  controllers: [UserController, ActivitiesController, StatsController],
  providers: [UserService, ActivitiesService, StatsService],
})
export class AppModule {}
