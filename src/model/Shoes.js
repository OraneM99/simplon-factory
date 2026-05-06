import { Product } from "./Product.js";
import { ShoeSize } from "./ShoeSize.js";
export class Shoes extends Product {
    size;
    constructor(productId, name, weight, price) {
        super(productId, name, weight, price);
        this.size = ShoeSize.Size38;
    }
    displayDetails() {
        return `Product ID : ${this.productId}, Name : ${this.name}, Weight : ${this.weight}, Shoe Size : ${this.size}, Price : ${this.price}.`;
    }
}
//# sourceMappingURL=Shoes.js.map