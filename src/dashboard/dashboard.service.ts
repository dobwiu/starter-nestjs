import { Injectable } from '@nestjs/common';
import { AccountsService } from 'src/accounts/accounts.service';

@Injectable()
export class DashboardService {
  constructor(private accountsService: AccountsService) {}
  getDashboard(accountId: string) {
    return {
      period: '09/2023',
      orders: 118,
      transactionAmount: 26034.04,
      netReceivedAmount: 19644.47,
      monthlyGoal: 45000,
      annualBalance: 120000,
      lastOrders: [
        {
          id: 2000004041832496,
          dateCreated: new Date('2022-08-14T07:22:21.000-04:00'),
          transactionAmount: 68.7,
          marketplaceFee: 26.34,
        },
        {
          id: 2000004041832496,
          dateCreated: new Date('2022-08-13T12:42:23.000-04:00'),
          transactionAmount: 54.99,
          marketplaceFee: 22.14,
        },
        {
          id: 2000004041832496,
          dateCreated: new Date('2022-08-12T15:24:55.000-04:00'),
          transactionAmount: 98.75,
          marketplaceFee: 36.34,
        },
      ],
    };
  }
}
