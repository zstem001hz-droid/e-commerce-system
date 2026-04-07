// Fetch products from the Dummy JSON API
export async function fetchProducts() {
  try {
    const response = await fetch("https://dummyjson.com/products");

    // Response verification before parsing
    if (!response.ok) {
        throw new Error("Network response was not established!");
    }

    // Parse the JSON response
    const data = await response.json();
    console.log("Products:", data);
  } catch (error) {
    // Handle any network or parsing errors
    console.error("Error:", error);
  }
}

fetchProducts();