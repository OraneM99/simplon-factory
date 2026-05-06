import { Customer } from "./Customer.js";
import type { Product } from "./Product.js";
export declare class Order {
    orderId: number;
    customer: Customer;
    productsList: Product[];
    orderDate: Date;
    constructor(orderId: number, customer: Customer, productsList: Product[], orderDate: Date);
    addProduct(product: Product): void;
}
//# sourceMappingURL=Order.d.ts.map