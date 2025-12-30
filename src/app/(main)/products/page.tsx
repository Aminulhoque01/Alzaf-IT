import Products from "@/components/Pages/Products/products";
import getProducts from "@/Data/products";
 

const ProductsSection = async () => {
  const res = await getProducts(1, 8);  

  return (
    <Products
      products={res.data.products}
      pagination={res.data.pagination}
      currentPage={1}
    />
  );
};

export default ProductsSection;



