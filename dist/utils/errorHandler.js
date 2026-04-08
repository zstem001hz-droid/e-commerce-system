// Error handling
// Network error
export class ProductError extends Error {
    constructor(message) {
        super(message);
        this.name = "ProductError";
    }
}
// Data error
export class DataError extends Error {
    constructor(message) {
        super(message);
        this.name = "DataError";
    }
}
//# sourceMappingURL=errorHandler.js.map