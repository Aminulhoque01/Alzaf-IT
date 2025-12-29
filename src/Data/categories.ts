import { BASE_URL } from "./BaseApi/api";

const getCategories=async()=>{
  const res= await fetch(`${BASE_URL}/categories`,{cache:'no-store'})
  if (!res.ok) {
    throw new Error('Failed to fetch categories');
  }

  return res.json();
}

export default getCategories