import { Customer } from "./Customer.js";
export class Order {
    orderId;
    customer;
    productsList = [];
    orderDate;
    constructor(orderId, customer, productsList, orderDate) {
        this.orderId = orderId;
        this.customer = customer;
        this.productsList = productsList;
        this.orderDate = orderDate;
    }
    addProduct(product) {
        this.productsList = [...this.productsList, product];
        console.log(this.productsList);
    }
}
//# sourceMappingURL=Order.js.map