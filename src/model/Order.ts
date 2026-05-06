import { Customer } from "./Customer.js";
import type { Product } from "./Product.js";

export class Order {
   
    orderId: number;
    customer: Customer;
    productsList : Product[] = [];
    orderDate: Date;

    constructor(orderId: number, customer: Customer, productsList: Product[], orderDate: Date) {
        this.orderId = orderId;
        this.customer = customer;
        this.productsList = productsList;
        this.orderDate = orderDate;
    }

    addProduct(product: Product) {
        this.productsList = [...this.productsList, product];
        console.log(this.productsList);
        
    }    
}