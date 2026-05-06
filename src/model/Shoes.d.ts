import { Product } from "./Product.js";
import { ShoeSize } from "./ShoeSize.js";
export declare class Shoes extends Product {
    size: ShoeSize;
    constructor(productId: number, name: string, weight: number, price: number);
    displayDetails(): string;
}
//# sourceMappingURL=Shoes.d.ts.map