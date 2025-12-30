import { BASE_URL } from "./BaseApi/api";

const singleProduct = async (id: string) => {
  try {
    const res = await fetch(`${BASE_URL}/products/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      return null;  
    }

    return res.json();
  } catch (error) {
    return null;  
  }
};

export default singleProduct;
