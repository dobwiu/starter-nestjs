import { Controller, Get, Param } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get(':accountId')
  findAll(@Param('accountId') accountId: number) {
    return this.ordersService.findAll(accountId);
  }

  @Get('/order/:id')
  findOne(@Param('id') id: number) {
    return this.ordersService.findOne(id);
  }
}
