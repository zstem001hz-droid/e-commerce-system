// Tax calculator

export function calculateTax(price: number, category: string): number {
        if (category === "groceries") {
            return price * (3 /100);
        } else {
            return price * (4.75 / 100);
        }
    }


// Testing
console.log(calculateTax(100, "groceries"));  
console.log(calculateTax(100, "electronics"));
