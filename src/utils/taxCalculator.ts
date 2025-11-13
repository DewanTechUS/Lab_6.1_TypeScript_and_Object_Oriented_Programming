// src/utils/taxCalculator.ts
//  tax helper that uses polymorphism
// https://ps-lms.vercel.app/curriculum/se/413/lab-1#:~:text=Create%20a%20Tax%20Calculator%20Utility%3A
import { Product } from "../models/Product";

export function calculateTax(product: Product): number {
  // Each product type decides its own tax rule
  return product.getPriceWithTax();
}
