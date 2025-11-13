
// class for all products (from Lesson 3)
// https://ps-lms.vercel.app/curriculum/se/413/lab-1#:~:text=Create%20the%20Product%20Base%20Class%3A
export class Product {
  sku: string;
  name: string;
  price: number;

  constructor(sku: string, name: string, price: number) {
 
    this.sku = sku;

  this.name = name;
 
  this.price = price;
  }




  // show product info // come back here and format better later //as per lesson instructions
  displayDetails(): string {
 return `${this.name} (SKU: ${this.sku}) costs $${this.price.toFixed(2)}`;
  }



 // default tax calculation (no tax) // as per lesson instructions
 getPriceWithTax(): number {
 return this.price;
  }
}
