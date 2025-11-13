"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/main.ts
// Main program: create products and show their details + tax price
// https://ps-lms.vercel.app/curriculum/se/413/lab-1#:~:text=Implement%20the%20Main%20Program%3A
// Import classes and tax calculator // as per lesson instructions
const PhysicalProduct_1 = require("./models/PhysicalProduct");
const DigitalProduct_1 = require("./models/DigitalProduct");
const taxCalculator_1 = require("./utils/taxCalculator");
// teacher told one of my classmate to use looping through products, displaying details and tax-included price
const products = [
    new PhysicalProduct_1.PhysicalProduct("P-001", "Laptop", 1200, 1.8),
    new PhysicalProduct_1.PhysicalProduct("P-002", "Headphones", 100, 0.25),
    new DigitalProduct_1.DigitalProduct("D-001", "E-Book", 15, 5),
    new DigitalProduct_1.DigitalProduct("D-002", "Music Album", 9.99, 120),
];
console.log("Product Details and Prices with Tax:");
for (const product of products) {
    console.log(product.displayDetails());
    const priceWithTax = (0, taxCalculator_1.calculateTax)(product);
    console.log("Price with tax: $" + priceWithTax.toFixed(2));
}
