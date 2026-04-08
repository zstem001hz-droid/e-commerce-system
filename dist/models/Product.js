// Base class for all products
// Map to the Dummy JSON Products API response
export class Product {
    id;
    title;
    description;
    category; // Determines tax rate - category based
    price; //Base price before discount or tax
    discountPercentage; // Discount percentage from D-JSON API
    rating;
    stock;
    brand;
    thumbnail;
    constructor(id, title, description, category, price, discountPercentage, rating, stock, brand, thumbnail) {
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
    displayDetails() {
        return `Product: ${this.title} | Category: ${this.category} | Price: $${this.price} | Rating: ${this.rating} | Stock: ${this.stock}`;
    }
    // Final price after discount
    getPriceWithDiscount() {
        return this.price - this.price * (this.discountPercentage / 100);
    }
}
//# sourceMappingURL=Product.js.map