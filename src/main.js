// src/main.ts
// Main program: create products and show their details + tax price
// https://ps-lms.vercel.app/curriculum/se/413/lab-1#:~:text=Implement%20the%20Main%20Program%3A
// Import classes and tax calculator // as per lesson instructions
import { PhysicalProduct } from "./models/PhysicalProduct";
import { DigitalProduct } from "./models/DigitalProduct";
import { calculateTax } from "./utils/taxCalculator";
// teacher told one of my classmate to use looping through products, displaying details and tax-included price
const products = [
    new PhysicalProduct("P-001", "Laptop", 1200, 1.8),
    new PhysicalProduct("P-002", "Headphones", 100, 0.25),
    new DigitalProduct("D-001", "E-Book", 15, 5),
    new DigitalProduct("D-002", "Music Album", 9.99, 120),
];
console.log("Product Details and Prices with Tax:");
for (const product of products) {
    console.log(product.displayDetails());
    const priceWithTax = calculateTax(product);
    console.log("Price with tax: $" + priceWithTax.toFixed(2));
}
//# sourceMappingURL=main.js.map