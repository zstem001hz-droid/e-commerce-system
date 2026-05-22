# 🛒 E-Commerce Product Management System

![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Node.js](https://img.shields.io/badge/Node.js-20.x-green)
![DummyJSON](https://img.shields.io/badge/API-DummyJSON-orange)

A TypeScript application demonstrating enterprise-level patterns including modular architecture, object-oriented design, and resilient error management. Fetches live product data from the DummyJSON API and applies business logic including discount calculations and tax assessments based on product category.

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Application Flow](#application-flow)
- [Getting Started](#getting-started)
- [Author](#author)
- [References](#references)
- [Reflections](#reflections)

## Overview
The E-Commerce Product Management System is a TypeScript application that demonstrates full-stack data management principles through integration with the Dummy JSON Products API. The system retrieves live product data and applies business logic including discount calculations and tax assessments based on product category.

The architecture follows object-oriented design principles, organizing functionality into discrete modules - a base `Product` class with extensible methods, a dedicated API service layer handling asynchronous data fetching, utility modules for financial calculations, and a custom error handling framework that identifies and manages failures gracefully.

Built with TypeScript's strict type system, the application enforces type safety across all data interactions, from API response mapping to calculated outputs. Asynchronous operations are managed using `async/await` with standard `try/catch` error handling, ensuring the application remains stable and predictable under real-world network conditions.

This project serves as a practical demonstration of enterprise-level TypeScript patterns including modular architecture, separation of concerns, and resilient error management - foundational skills for building maintainable, scalable applications.

## Tech Stack

- [TypeScript](https://www.typescriptlang.org/) — strict type safety across all modules
- [Node.js](https://nodejs.org/) — runtime environment
- [DummyJSON API](https://dummyjson.com/docs/products) — live product data source
- [ts-node](https://typestrong.org/ts-node/) — TypeScript execution without manual compilation

## Project Structure

```
e-commerce-system/
├── src/
│   ├── models/
│   │   └── Product.ts          ← base class with properties and methods
│   ├── services/
│   │   └── apiService.ts       ← async data fetching from DummyJSON API
│   ├── utils/
│   │   ├── discountCalculator.ts  ← dollar amount discount calculation
│   │   ├── taxCalculator.ts       ← category-based tax calculation
│   │   └── errorHandler.ts        ← custom error class
│   └── main.ts                 ← orchestrates all modules
├── .env.example
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

## Application Flow

1. `apiService.ts` fetches live product data from DummyJSON Products API using `async/await`
2. API response mapped to typed `Product` class instances — TypeScript enforces type safety
3. `discountCalculator.ts` calculates dollar amount discounted per product
4. `taxCalculator.ts` applies 4.75% tax for standard products, 3% for groceries
5. Custom error class in `errorHandler.ts` catches and manages failures gracefully
6. `main.ts` orchestrates all modules and outputs calculated results

## Getting Started

### Prerequisites
- Node.js v20+
- TypeScript v5+

### Installation
1. Clone the repository
2. Run `npm install`
3. Run `npx ts-node src/main.ts`

### Notes
- No API key required - uses the free Dummy JSON Products API
- Displays 30 products with discount and tax calculations
- Groceries are taxed at 3%, all other categories at 4.75%

## Author

Zac White

## References

- [DummyJSON Products API](https://dummyjson.com/docs/products)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [ts-node](https://typestrong.org/ts-node/)

## Reflections

Building the E-Commerce Product Management System was one of the more enjoyable projects in this module, largely because working with a real API made everything feel tangible. Seeing actual product data populate in the terminal after writing the fetch logic was genuinely satisfying, and the Dummy JSON Products API was a pleasure to work with. Clean documentation, no authentication headaches, and a well-structured response made it easy to focus on the TypeScript implementation rather than fighting the API itself. 

From a technical standpoint, the project reinforced how Object-oriented programming (OOP) principles translate into real-world applications. Structuring the codebase around a base `Product` class, separating utility functions into dedicated modules, and implementing a custom error handling framework gave the project a professional architecture that felt intentional rather than thrown together. 

The biggest challenge was understanding the gap between raw API data and class instances - learning that fetched JSON objects don't automatically have class methods attached was a key insight. Mapping the API response into `Product` instances using `.map()` connected several concepts simultaneously: higher-order functions, OOP, and async data handling.

Managing asynchronous operations with `async/await` and `try/catch` felt more natural than Promise chains - the code reads clearly and errors are handled in one centralized place rather than scattered across multiple `catch()` calls. the custom `ProductError` and `DataError` classes added precision to error identification that generic error messages simply can't provide. 

Overall this project was a solid demonstration of how TypeScript's type system, OOP principles, and modern async patterns come together to build something functional and maintainable.