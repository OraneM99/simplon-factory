export class Product {
    productId;
    name;
    weight;
    price;
    constructor(productId, name, weight, price) {
        this.productId = productId;
        this.name = name;
        this.weight = weight;
        this.price = price;
    }
    displayDetails() {
        return `Product ID : ${this.productId}, Name : ${this.name}, Weight : ${this.weight}, Price : ${this.price}.`;
    }
}
//# sourceMappingURL=Product.js.map