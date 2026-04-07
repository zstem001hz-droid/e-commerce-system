// Base class for all products
// Map to the Dummy JSON Products API response

export class Product {
    id: number;
    title: string;
    description: string;
    category: string;  // Determines tax rate - category based
    price: number;  //Base price before discount or tax
    discountPercentage: number;  // Discount percentage from D-JSON API
    rating: number;
    stock: number;
    brand: string;
    thumbnail: string;


    constructor(id: number, title: string, description: string, category: string, price: number, discountPercentage: number, rating: number, stock: number, brand: string, thumbnail: string) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.category = category;
        this.price = price;
        this.discountPercentage = discountPercentage;
        this.rating = rating;
        this.stock = stock;
        this.brand = brand;
        this.thumbnail = thumbnail;

    }

    // Product details
    displayDetails(): string {
        return `Product: ${this.title} | Category: ${this.category} | Price: $${this.price} | Rating: ${this.rating} | Stock: ${this.stock}`;
    }
    // Final price after discount
    getPriceWithDiscount(): number {
        return this.price - (this.price * (this.discountPercentage /100));
    }
}