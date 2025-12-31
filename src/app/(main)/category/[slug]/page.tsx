/* eslint-disable @typescript-eslint/no-explicit-any */
import getProducts from "@/Data/products";
import Image from "next/image";
import { notFound } from "next/navigation";

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
}

interface CategoryPageProps {
  params: { slug: string };
}

const CategoryPage = async ({ params }: CategoryPageProps) => {
  const { slug } = await params; // unwrap async params

  const allProducts = await getProducts({});

  const products = allProducts?.data?.products?.filter(
    (p: any) => p.categorySlug?.trim().toLowerCase() === slug?.trim().toLowerCase()
  ) || [];

  if (!products.length) return notFound();

  return (
    <div className="container mx-auto mt-20">
      <h1 className="text-2xl font-bold mb-4">{slug.toUpperCase()}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product: any) => (
          <div key={product.id} className="border p-4 rounded shadow">
            <Image
              src={product.image}
              alt={product.name}
              width={250}
              height={250}
              className="w-full h-48"
            />
            <h2 className="font-semibold mt-2">{product.name}</h2>
            <p>Price: ${product.price}</p>
            <p>Rating: {product.rating}</p>
            <p>Category: {product.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
