// errorHandler.ts import
import { ProductError, DataError } from "../utils/errorHandler.js";
// Fetch products from the Dummy JSON API
export async function fetchProducts() {
    try {
        const response = await fetch("https://dummyjson.com/products");
        // Response verification before parsing
        if (!response.ok) {
            throw new ProductError("Failed to fetch products from the API");
        }
        // Parse the JSON response
        const data = await response.json();
        return data.products; // Return only the products array
    }
    catch (error) {
        if (error instanceof ProductError) {
            console.error("Product Error:", error.message);
        }
        else if (error instanceof DataError) {
            console.error("Dara Error:", error.message);
        }
        else {
            console.error("Unknown Error:", error);
        }
    }
}
//# sourceMappingURL=apiService.js.map