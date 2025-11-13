"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DigitalProduct = void 0;
// src/models/DigitalProduct.ts
// Digital product: no tax and has file size
// https://ps-lms.vercel.app/curriculum/se/413/lab-1#:~:text=Create%20the%20DigitalProduct%20Subclass%3A
const Product_1 = require("./Product");
class DigitalProduct extends Product_1.Product {
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
exports.DigitalProduct = DigitalProduct;
