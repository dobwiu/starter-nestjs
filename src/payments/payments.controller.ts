import { Controller, Get, Param } from '@nestjs/common';
import { PaymentsService } from './payments.service';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Get(':accountId')
  findAll(@Param('accountId') accountId: number) {
    return this.paymentsService.findAll(accountId);
  }

  @Get('/payment/:id')
  findOne(@Param('id') id: number) {
    return this.paymentsService.findOne(id);
  }
}
