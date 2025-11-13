//https://ps-lms.vercel.app/curriculum/se/413/lab-1#:~:text=Create%20the%20PhysicalProduct%20Subclass%3A
// src/models/PhysicalProduct.ts
// Physical product uses 10% tax and has weight

import { Product } from "./Product";

export class PhysicalProduct extends Product {
  weight: number; // in kilograms

  constructor(sku: string, name: string, price: number, weight: number) {
    super(sku, name, price); // call Product constructor
    this.weight = weight;
  }

  // Getter to show formatted weight, like "2.5 kg" // as per lesson instructions
  get formattedWeight(): string {
    return `${this.weight} kg`;
  }

  // 10% tax for physical products
  getPriceWithTax(): number {
    const taxRate = 0.10; // 10% tax
    const finalPrice = this.price * (1 + taxRate);
    return Number(finalPrice.toFixed(2));
  }

  // add weight info to base details
  displayDetails(): string {
    return `${super.displayDetails()} | Weight: ${this.formattedWeight}`;
  }
}
