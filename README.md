# E-Commerce Product Management System

A TypeScript application that fetches real product data from the Dummy JSON Products API, implementing OOP principles, async/await, and custom error handling.

## Table of contents

- [Overview](#overview)
- [Features](#features)
- [Technologies](#technologies)
- [Setup](#setup)
- [Author](#author)
- [Reflections](#reflections)

## Overview
The E-Commerce Product Management System is a TypeScript application that demonstrates full-stack data management principles through integration with the Dummy JSON Products API. The System retrieves live product data and applies business logic including discount calculations and tax assessments based on product category.

The architecture follows object-oriented design principles, organizing functionality into discrete modules - a base `Product` class with extensible methods, a dedicated API service layer handling asynchronous data fetching, utility modules for financial calculations, and a custom error handling framework that identifies and manages failures gracefully.

Built with TypeScript's strict type system, the application enforces type safety across all data interactions, from API response mapping to calculated outputs. Asynchronous operations are managed using `async/await` with standard `try/catch` error handling, ensuring the application remains stable and predictable under real-world network conditions.

This project serves as a practical demonstration of enterprise-level TypeScript patterns including modular architecture, separation of concerns, and resilient error management - foundational skills for building maintainable, scalable applications.

## Features
- Fetches real product data from the Dummy JSON Products API
- Product class with discount and tax calculations
- Async/await API service with error handling
- Custom error classes for different error types
- Modular file structure

## Technologies
- TypeScript
- Node.js
- Dummy JSON Products API

## Author

Zac White

## Reflections