import { Customer } from "./customer.model";
import { Item } from "./item.model";

export class Pedido {
    customer: any;
    constructor(
      public id_pedido?: number,
      public quantidade?: number,
      public cliente?: Customer,
      public item?: Item,
      public id_customer?: Customer,
      public firstName?: Customer,
      public secondName?: Customer,
      public nome_item?: Item,
      public valor?: Item,
      
    ) {}
  }
  