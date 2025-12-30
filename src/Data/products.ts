import { BASE_URL } from "./BaseApi/api";



const getProducts = async (
  page = 1,
  limit = 10,
  category?: string
) => {
  const params = new URLSearchParams({
    page: page.toString(),
    limit: limit.toString(),
  });

  if (category) {
    params.append("category", category);
  }

  const res = await fetch(`${BASE_URL}/products?${params}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
};


export default getProducts;