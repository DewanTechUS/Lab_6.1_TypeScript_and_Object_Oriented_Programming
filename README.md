# Lab 6.1 TypeScript and Object-Oriented Programming
# Author
Dewan Mahmud (Rocky)
Per Scholas Software Engineering | 2025
GitHub: https://github.com/DewanTechUS
Portfolio: https://dewantech.com

# Overview
This project is my completed work for Lab 1: TypeScript and Object-Oriented Programming.
The goal of the lab was to build a inventory tracker using:

- TypeScript
- Classes and inheritance
- Modules
- Basic OOP concepts

# The system includes:
- A Product base class
- A PhysicalProduct subclass
- A DigitalProduct subclass
- A tax calculator utility
- A main program that displays product information

# What I Learned
## In this lab, I practiced:
- Creating classes in TypeScript
- Inheritance and polymorphism
- Getter methods for formatting output
- Organizing code using modules
- Compiling TypeScript into JavaScript
- Running the compiled project using Node

# Debugging Experience
The lab itself should take about 1 hour,
but I spent around 5 hours debugging simple issues.

## Issues I Fixed
- Wrong file paths
- Incorrect tsconfig settings
- Missing dist folder
- Node not finding compiled files
- Module type errors

## Even though it took longer, debugging helped me understand:
- How TypeScript compiles to JavaScript
- How Node loads ES modules
- How to fix real development errors
- This improved my confidence and problem-solving skills.

# Special Thanks
Special thanks to my instructors and my classmates who worked together to resolve issues, debug problems, and support one another. Everyone is very knowledgeable, and this lab took me much longer than expected. Their guidance teaching us how to loop through arrays, work with directories, fix syntax errors, and set up files correctly helped me understand the concepts clearly and finally complete this project successfully after 12 hours of struggle.

# Project Structure
inventory-tracker
src/models/Product.ts
src/models/PhysicalProduct.ts
src/models/DigitalProduct.ts
src/utils/taxCalculator.ts
src/main.ts
tsconfig.json
README.md
dist ( Generated after compiling )

# How to Run the Project
1. Install dependencies
npm install

2. Compile TypeScript
npx tsc

3. Run the compiled project
node dist/main.js

Or use:
npm start

# Features Implemented

- Product class (sku, name, price)
- PhysicalProduct class (weight + 10% tax)
- DigitalProduct class (file size + no tax)
- Polymorphic tax calculation
- Main program loops through products and prints details

# Reflection

## This lab helped me strengthen my understanding of:
- TypeScript
- Object-oriented programming
- Module organization
- Real debugging and project setup
- The extra debugging time helped me grow as a developer.

# References and Resources Used
https://www.youtube.com/watch?v=PTlCq7GEpCo - Watch this video
https://ps-lms.vercel.app/curriculum/se/413/lab-1
https://www.typescriptlang.org/docs/handbook/2/classes.html
https://www.typescriptlang.org/docs/handbook/modules/introduction.html
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
https://www.typescripttutorial.net/typescript-tutorial/typescript-date/
https://www.w3schools.com/jsref/jsref_obj_date.asp
https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super
https://www.geeksforgeeks.org/typescript/method-overriding-in-typescript/