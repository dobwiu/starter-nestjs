import { Injectable } from '@nestjs/common';
import { faker } from '@faker-js/faker';
import { Order } from './entities/order.entity';

@Injectable()
export class OrdersService {
  private orders: Order[] = [];

  constructor() {
    for (let i = 1; i < 11; i++) {
      const order: Order = {
        id: +faker.string.numeric(16),
        dateCreated: faker.date.anytime(),
        totalAmount: +faker.finance.amount(),
        status: faker.helpers.arrayElement([
          'confirmed',
          'paid',
          'payment_in_process',
          'cancelled',
        ]),
        buyer: {
          firstName: faker.person.firstName(),
        },
      };

      this.orders.push(order);
    }
  }

  findAll(accountId: number) {
    return this.orders;
  }

  findOne(id: number) {
    const price: number = +faker.finance.amount();
    return {
      id: id,
      dateCreated: faker.date.anytime(),
      lastUpdated: faker.date.anytime(),
      dateClosed: Date.now,
      currencyId: 'BRL',
      totalAmount: price,
      paidAmount: price,
      status: 'paid',
      orderItems: [
        {
          item: {
            id: faker.commerce.isbn(),
            title: faker.commerce.product(),
            categoryId: faker.string.alphanumeric(9),
            variationId: faker.string.numeric(11),
          },
          quantity: 3,
          unitPrice: +Math.round(price / 3).toFixed(2),
          fullUnitPrice: +Math.round(price / 3).toFixed(2),
          saleFee: +Math.round(price / 3 / 2.6).toFixed(2),
          listingTypeId: 'gold_pro',
          discounts: 0,
        },
      ],
      payments: [
        {
          id: +faker.string.numeric(11),
          payerId: faker.string.numeric(9),
          paymentMethodId: 'account_money',
          currencyId: 'BRL',
          installments: 1,
          operationType: 'regular_payment',
          paymentType: 'account_money',
          status: 'approved',
          statusDetail: 'accredited',
          transaction_amount: price,
          transactionAmountRefunded: 0.0,
          taxesAmount: 0.0,
          shippingCost: 0.0,
          couponAmount: 0.0,
          overpaidAmount: 0.0,
          totalPaidAmount: price,
          installmentAmount: 0.0,
          marketplaceFee: +Math.round(price / 2.6).toFixed(2),
        },
      ],
      shipping: {
        id: +faker.string.numeric(11),
      },
      buyer: {
        id: faker.string.numeric(9),
        nickname: faker.company.name(),
        firstName: faker.person.firstName(),
      },
    };
  }
}
