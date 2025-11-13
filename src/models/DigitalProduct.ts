// src/models/DigitalProduct.ts
// Digital product: no tax and has file size
// https://ps-lms.vercel.app/curriculum/se/413/lab-1#:~:text=Create%20the%20DigitalProduct%20Subclass%3A
import { Product } from "./Product";

export class DigitalProduct extends Product {
  fileSize: number; // in megabytes

  constructor(sku: string, name: string, price: number, fileSize: number) {
    super(sku, name, price);
    this.fileSize = fileSize;
  }

  // Getter to show formatted file size, like "50 MB"
  get formattedFileSize(): string {
    return `${this.fileSize} MB`;
  }

  // Digital products: no tax // as per lesson instructions
  getPriceWithTax(): number {
    return Number(this.price.toFixed(2));
  }

  // Add file size info to base details // as per lesson instructions
  displayDetails(): string {
    return `${super.displayDetails()} | File size: ${this.formattedFileSize}`;
  }
}
