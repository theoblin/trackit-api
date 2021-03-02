import {Controller, Get, HttpException, InternalServerErrorException} from '@nestjs/common';
import { StatsService } from '../../service/stats/stats.service';
import {ApiOkResponse} from "@nestjs/swagger";

@Controller('/api/v1/stats')
export class StatsController {
  constructor(private statsService: StatsService) {}

  @Get('')
  @ApiOkResponse({description: 'User statistics'})
  getAllStats(): any {
    try {
      return this.statsService.getStats();
    } catch (e) {
      return StatsController.handleError(e, 'err.get.stats', 'Failed to get stats');
    }
  }

/*  @Get('/test')
  test(): any {
    try {
      return this.statsService.updateBestDistance();
    } catch (e) {
      return StatsController.handleError(e, 'err.update', 'Failed to update best distance');
    }
  }*/

  private static handleError(error: Error, code: string, defaultMessage: string) {
    const objectOrError = { code, message: defaultMessage, detail: error };
    throw error instanceof HttpException
        ? error
        : new InternalServerErrorException(objectOrError, error.message);
  }
}
