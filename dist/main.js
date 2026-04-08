// Import TypeScript data
import { fetchProducts } from "./services/apiService.js";
import { Product } from "./models/Product.js";
import { calculateDiscount } from "./utils/discountCalculator.js";
import { calculateTax } from "./utils/taxCalculator.js";
// Fetch products
async function main() {
    try {
        const productsData = await fetchProducts();
        // Map API data into Product instances
        const products = productsData.map((p) => new Product(p.id, p.title, p.description, p.category, p.price, p.discountPercentage, p.rating, p.stock, p.brand ?? "unknown", p.thumbnail));
        // Loop and display results
        for (const product of products) {
            console.log(product.displayDetails());
            console.log(`Discount: $${calculateDiscount(product.price, product.discountPercentage).toFixed(2)}`);
            console.log(`Tax: $${calculateTax(product.price, product.category).toFixed}`);
            console.log("- - - - -");
        }
    }
    catch (error) {
        console.error("Error: ", error);
    }
}
main();
//# sourceMappingURL=main.js.map