export class Order {
  id: number;
  dateCreated: Date;
  totalAmount: number;
  status: string;
  buyer: {
    firstName: string;
  };
}
