/* eslint-disable @typescript-eslint/no-explicit-any */
import Products from "@/components/Pages/Products/products";
import getProducts from "@/Data/products";


const ProductsPage = async ({ searchParams }:any) => {
  const currentPage = Number(searchParams?.page) || 1;

  const res = await getProducts(currentPage);
  const products = res?.data?.products || [];
  const pagination = res?.data?.pagination;
   

  return (
    <Products 
      products={products}
      pagination={pagination}
      currentPage={currentPage}
    />
  );
};


export default ProductsPage
