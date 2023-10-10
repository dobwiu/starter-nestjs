import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { OrdersModule } from './orders/orders.module';
import { PaymentsModule } from './payments/payments.module';
import { InvoicesModule } from './invoices/invoices.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { AccountsModule } from './accounts/accounts.module';

@Module({
  imports: [AuthModule, UsersModule, OrdersModule, PaymentsModule, InvoicesModule, DashboardModule, AccountsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
