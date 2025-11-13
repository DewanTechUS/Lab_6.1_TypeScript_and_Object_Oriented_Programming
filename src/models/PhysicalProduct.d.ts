import { Product } from "./Product";
export declare class PhysicalProduct extends Product {
    weight: number;
    constructor(sku: string, name: string, price: number, weight: number);
    get formattedWeight(): string;
    getPriceWithTax(): number;
    displayDetails(): string;
}
//# sourceMappingURL=PhysicalProduct.d.ts.map