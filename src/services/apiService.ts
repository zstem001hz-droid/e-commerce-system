// Fetch products from the Dummy JSON API
export async function fetchProducts() {
  try {
    const response = await fetch("https://dummyjson.com/products");

    if (!response.ok) {
        throw new Error("Network response was not established!");
    }

    const data = await response.json();
    console.log("Products:", data);
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchProducts();