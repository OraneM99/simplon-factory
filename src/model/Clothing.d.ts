import { ClothingSize } from "./ClothingSize.js";
import { Product } from "./Product.js";
export declare class Clothing extends Product {
    size: ClothingSize;
    constructor(productId: number, name: string, weight: number, price: number);
    displayDetails(): string;
}
//# sourceMappingURL=Clothing.d.ts.map