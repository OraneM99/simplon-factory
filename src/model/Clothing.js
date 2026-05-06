import { ClothingSize } from "./ClothingSize.js";
import { Product } from "./Product.js";
export class Clothing extends Product {
    size;
    constructor(productId, name, weight, price) {
        super(productId, name, weight, price);
        this.size = ClothingSize.S;
    }
    displayDetails() {
        return `Product ID : ${this.productId}, Name : ${this.name}, Weight : ${this.weight}, Clothing Size : ${this.size} , Price : ${this.price}.`;
    }
}
//# sourceMappingURL=Clothing.js.map