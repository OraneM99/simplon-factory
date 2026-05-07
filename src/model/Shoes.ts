import { Product } from "./Product.js";
import { ShoeSize } from "./ShoeSize.js";

export class Shoes extends Product {

    size: ShoeSize;

    constructor (productId: number, name: string, weight: number, price: number, size: ShoeSize) {
        super(productId, name, weight, price);
        this.size = size;
    }

    displayDetails(): string {
        return `Product ID : ${this.productId}, Name : ${this.name}, Weight : ${this.weight}, Shoe Size : ${this.size}, Price : ${this.price}.`
    }
}