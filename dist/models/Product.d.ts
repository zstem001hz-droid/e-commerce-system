export declare class Product {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    thumbnail: string;
    constructor(id: number, title: string, description: string, category: string, price: number, discountPercentage: number, rating: number, stock: number, brand: string, thumbnail: string);
    displayDetails(): string;
    getPriceWithDiscount(): number;
}
//# sourceMappingURL=Product.d.ts.map