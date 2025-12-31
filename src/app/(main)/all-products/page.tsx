import AllProducts from "@/components/Pages/AllProducts/AllProducts";
import getProducts from "@/Data/products";

type PageProps = {
  searchParams: {
    search?: string;
    sort?: string;
    minPrice?: string;
    maxPrice?: string;
  };
};

const Page = async ({ searchParams }: PageProps) => {
  const res = await getProducts({
    page: 1, // just fetch all products
    limit: 1000, // large limit to show all
    search: searchParams.search,
    sort: searchParams.sort,
    minPrice: searchParams.minPrice ? Number(searchParams.minPrice) : undefined,
    maxPrice: searchParams.maxPrice ? Number(searchParams.maxPrice) : undefined,
  });

  return <AllProducts products={res.data.products} />;
};

export default Page;

