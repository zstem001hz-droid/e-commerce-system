# 🛒 E-Commerce Product Management System

A TypeScript application that fetches real product data from the Dummy JSON Products API, implementing OOP principles, async/await, and custom error handling.

## Table of contents

- [Overview](#overview)
- [Features](#features)
- [Setup](#setup)
- [Technologies](#technologies)
- [Author](#author)
- [Reflections](#reflections)

## Overview
The E-Commerce Product Management System is a TypeScript application that demonstrates full-stack data management principles through integration with the Dummy JSON Products API. The system retrieves live product data and applies business logic including discount calculations and tax assessments based on product category.

The architecture follows object-oriented design principles, organizing functionality into discrete modules - a base `Product` class with extensible methods, a dedicated API service layer handling asynchronous data fetching, utility modules for financial calculations, and a custom error handling framework that identifies and manages failures gracefully.

Built with TypeScript's strict type system, the application enforces type safety across all data interactions, from API response mapping to calculated outputs. Asynchronous operations are managed using `async/await` with standard `try/catch` error handling, ensuring the application remains stable and predictable under real-world network conditions.

This project serves as a practical demonstration of enterprise-level TypeScript patterns including modular architecture, separation of concerns, and resilient error management - foundational skills for building maintainable, scalable applications.

## Features
- Fetches real product data from the Dummy JSON Products API
- Product class with discount and tax calculations
- Async/await API service with error handling
- Custom error classes for different error types
- Modular file structure

## Setup

### Prerequisites
- Node.js
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/zstem001hz-droid/e-commerce-system.git
cd e-commerce-system
```

2. Install dependencies:
```bash
npm install
```

3. Compile TypeScript:
```bash
npx tsc
```

4. Run the application:
```bash
node dist/main.js
```

### Notes
- No API key required - uses the free Dummy JSON Products API
- Displays 30 products with discount and tax calculations
- Groceries are taxed at 3%, all other categories at 4.75%

## Technologies
- Node.js
- TypeScript
- Dummy JSON Products API

## Author

Zac White

## Reflections

Building the E-Commerce Product Management System was one of the more enjoyable projects in this module, largely because working with a real API made everything feel tangible. Seeing actual product data populate in the terminal after writing the fetch logic was genuinely satisfying, and the Dummy JSON Products API was a pleasure to work with. Clean documentation, no authentication headaches, and a well-structured response made it easy to focus on the TypeScript implementation rather than fighting the API itself. 

From a technical standpoint, the project reinforced how Object-oriented programming (OOP) principles translate into real-world applications. Structuring the codebase around a base `Product` class, separating utility functions into dedicated modules, and implementing a custom error handling framework gave the project a professional architecture that felt intentional rather than thrown together. 

The biggest challenge was understanding the gap between raw API data and class instances - learning that fetched JSON objects don't automatically have class methods attached was a key insight. Mapping the API response into `Product` instances using `.map()` connected several concepts simultaneously: higher-order functions, OOP, and async data handling.

Managing asynchronous operations with `async/await` and `try/catch` felt more natural than Promise chains - the code reads clearly and errors are handled in one centralized place rather than scattered across multiple `catch()` calls. the custom `ProductError` and `DataError` classes added precision to error identification that generic error messages simply can't provide. 

Overall this project was a solid demonstration of how TypeScript's type system, OOP principles, and modern async patterns come together to build something functional and maintainable.