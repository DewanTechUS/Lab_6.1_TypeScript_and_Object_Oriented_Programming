"use strict";
//https://ps-lms.vercel.app/curriculum/se/413/lab-1#:~:text=Create%20the%20PhysicalProduct%20Subclass%3A
// src/models/PhysicalProduct.ts
// Physical product uses 10% tax and has weight
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhysicalProduct = void 0;
const Product_1 = require("./Product");
class PhysicalProduct extends Product_1.Product {
    constructor(sku, name, price, weight) {
        super(sku, name, price); // call Product constructor
        this.weight = weight;
    }
    // Getter to show formatted weight, like "2.5 kg" // as per lesson instructions
    get formattedWeight() {
        return `${this.weight} kg`;
    }
    // 10% tax for physical products
    getPriceWithTax() {
        const taxRate = 0.10; // 10% tax
        const finalPrice = this.price * (1 + taxRate);
        return Number(finalPrice.toFixed(2));
    }
    // add weight info to base details
    displayDetails() {
        return `${super.displayDetails()} | Weight: ${this.formattedWeight}`;
    }
}
exports.PhysicalProduct = PhysicalProduct;
