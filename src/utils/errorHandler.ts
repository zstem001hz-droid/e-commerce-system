// Error handling

// Network error
export class ProductError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "ProductError";
    }
}

// Data error
export class DataError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "DataError";
    }
}