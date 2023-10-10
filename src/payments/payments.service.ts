import { Injectable } from '@nestjs/common';
import { Payment } from './entities/payment.entity';
import { faker } from '@faker-js/faker';

@Injectable()
export class PaymentsService {
  private payments: Payment[] = [];

  findAll(accountId: number) {
    const price: number = +faker.finance.amount();
    for (let i = 1; i < 11; i++) {
      const payment: Payment = {
        id: +faker.string.numeric(16),
        dateCreated: faker.date.anytime(),
        dateApproved: faker.date.anytime(),
        moneyReleaseDate: faker.date.anytime(),
        lastModified: faker.date.anytime(),
        transactionAmount: price,
        totalPaidAmount: price,
        amountRefunded: 0,
        status: 'approved',
        statusDetail: 'accredited',
        orderId: +faker.string.numeric(16),
        netReceivedAmount: this.applyDiscount(price, 40),
        mercadopagoFee: this.applyDiscount(price, 75),
        marketplaceFee: this.applyDiscount(price, 85),
        released: faker.helpers.arrayElement(['no', 'yes']),
      };

      this.payments.push(payment);
    }

    return this.payments;
  }

  findOne(paymentId: number) {
    const price: number = +faker.finance.amount();
    return {
      id: paymentId,
      dateCreated: faker.date.anytime(),
      dateApproved: faker.date.anytime(),
      moneyReleaseDate: faker.date.anytime(),
      lastModified: Date.now,
      currencyId: 'BRL',
      transactionAmount: price,
      totalPaidAmount: price,
      shippingCost: 0,
      couponAmount: 0,
      status: 'approved',
      statusDetail: 'accredited',
      installmentAmount: 1,
      paymentType: 'account_money',
      paymentMethodId: 'account_money',
      marketplace: 'MELI',
      operationType: 'regular_payment',
      amountRefunded: 0,
      conceptAmount: 0,
      overpaidAmount: 0,
      orderId: +faker.string.numeric(16),
      accountMoneyAmount: 0.0,
      netReceivedAmount: this.applyDiscount(price, 40),
      mercadopagoFee: this.applyDiscount(price, 75),
      marketplaceFee: this.applyDiscount(price, 85),
      discountFee: 0.0,
      couponFee: 0.0,
      financeFee: 0.0,
      released: faker.helpers.arrayElement(['no', 'yes']),
    };
  }

  applyDiscount(price: number, discountPercentage: number): number {
    const discount = price * (discountPercentage / 100);
    const discountedPrice = price - discount;
    return Number(discountedPrice.toFixed(2));
  }
}
