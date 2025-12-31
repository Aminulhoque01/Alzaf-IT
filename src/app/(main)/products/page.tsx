import Products from "@/components/Pages/Products/products";
import getProducts from "@/Data/products";

const ProductsPage = async () => {
  const res = await getProducts({
    page: 1,
    limit: 10,
    search: "",
    minPrice: 100,
    maxPrice: 2000,
    sort: "price-asc",
  });

  return (
    <Products
      products={res.data.products}
      pagination={res.data.pagination}
      currentPage={1}
    />
  );
};


export default ProductsPage;


