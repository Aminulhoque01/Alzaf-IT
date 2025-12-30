import { BASE_URL } from "./BaseApi/api";

const getProducts = async (page = 1, limit = 10) => {
  const res = await fetch(
    `${BASE_URL}/products?page=${page}&limit=${limit}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
};

export default getProducts;
