// Discount products calculator

export function calculateDiscount(price: number, discountPercentage: number): number {
        return price * (discountPercentage /100);
}

console.log(calculateDiscount(100, 10)); // 10
console.log(calculateDiscount(50, 20)); // 10