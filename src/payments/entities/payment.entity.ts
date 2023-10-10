export class Payment {
  id: number;
  dateCreated: Date;
  dateApproved: Date;
  moneyReleaseDate: Date;
  lastModified: Date;
  transactionAmount: number;
  totalPaidAmount: number;
  amountRefunded: number;
  status: string;
  statusDetail: string;
  orderId: number;
  netReceivedAmount: number;
  mercadopagoFee: number;
  marketplaceFee: number;
  released: string;
}
