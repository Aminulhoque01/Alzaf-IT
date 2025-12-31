import { BASE_URL } from "./BaseApi/api";

type GetProductsParams = {
  page?: number;
  limit?: number;
  category?: string;
  search?: string;
  minPrice?: number;
  maxPrice?: number;
  sort?: string;
};

const getProducts = async ({
  page = 1,
  limit = 10,
  category,
  search,
  minPrice,
  maxPrice,
  sort,
}: GetProductsParams) => {
  const params = new URLSearchParams({
    page: page.toString(),
    limit: limit.toString(),
  });

  if (category) params.append("category", category);
  if (search) params.append("search", search);
  if (minPrice !== undefined) params.append("minPrice", String(minPrice));
  if (maxPrice !== undefined) params.append("maxPrice", String(maxPrice));
  if (sort) params.append("sort", sort);

  const res = await fetch(`${BASE_URL}/products?${params.toString()}`, {
    cache: "no-store",  
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
};

export default getProducts;
