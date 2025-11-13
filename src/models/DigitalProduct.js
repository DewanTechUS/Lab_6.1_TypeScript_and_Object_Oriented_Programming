// src/models/DigitalProduct.ts
// Digital product: no tax and has file size
// https://ps-lms.vercel.app/curriculum/se/413/lab-1#:~:text=Create%20the%20DigitalProduct%20Subclass%3A
import { Product } from "./Product";
export class DigitalProduct extends Product {
    fileSize; // in megabytes
    constructor(sku, name, price, fileSize) {
        super(sku, name, price);
        this.fileSize = fileSize;
    }
    // Getter to show formatted file size, like "50 MB"
    get formattedFileSize() {
        return `${this.fileSize} MB`;
    }
    // Digital products: no tax // as per lesson instructions
    getPriceWithTax() {
        return Number(this.price.toFixed(2));
    }
    // Add file size info to base details // as per lesson instructions
    displayDetails() {
        return `${super.displayDetails()} | File size: ${this.formattedFileSize}`;
    }
}
//# sourceMappingURL=DigitalProduct.js.map