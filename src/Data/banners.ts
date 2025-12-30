import { BASE_URL } from "./BaseApi/api"


const banners=async()=>{
  const res= await fetch(`${BASE_URL}/banners`,{cache:'no-store'})
  if (!res.ok) {
    throw new Error('Failed to fetch categories');
  }

  return res.json();
};

export default banners;