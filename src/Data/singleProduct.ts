import { BASE_URL } from "./BaseApi/api"


const singleProduct= async(id: string)=>{
  const res = await fetch(`${BASE_URL}/products/${id}`,{
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Product not found");
  }

  return res.json();
}

export default singleProduct;