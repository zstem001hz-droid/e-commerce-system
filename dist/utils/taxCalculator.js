// Tax calculator
export function calculateTax(price, category) {
    if (category === "groceries") {
        return price * (3 / 100);
    }
    else {
        return price * (4.75 / 100);
    }
}
//# sourceMappingURL=taxCalculator.js.map