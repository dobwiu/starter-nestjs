import { Controller, Get, Param } from '@nestjs/common';
import { DashboardService } from './dashboard.service';

@Controller('dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Get(':accountId')
  getDashboard(@Param('accountId') accountId: string) {
    return this.dashboardService.getDashboard(accountId);
  }
}
