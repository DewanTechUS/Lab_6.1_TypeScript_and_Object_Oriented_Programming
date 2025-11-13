"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateTax = calculateTax;
function calculateTax(product) {
    // Each product type decides its own tax rule
    return product.getPriceWithTax();
}
