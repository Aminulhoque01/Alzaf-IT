/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa6";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, useMemo } from "react";

type ProductsProps = {
  products: any[];
};

const AllProducts = ({ products }: ProductsProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const search = searchParams.get("search") || "";
  const sort = searchParams.get("sort") || "";

  const [searchValue, setSearchValue] = useState(search);

 
  const updateParams = (key: string, value?: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value) params.set(key, value);
    else params.delete(key);

    router.push(`?${params.toString()}`);
  };

   
  useEffect(() => {
    const delay = setTimeout(() => {
      updateParams("search", searchValue);
    }, 400);

    return () => clearTimeout(delay);
  }, [searchValue]);

  
  const filteredProducts = useMemo(() => {
    const lowerSearch = searchValue.toLowerCase();
    const result = products.filter(
      (product) =>
        product.name.toLowerCase().includes(lowerSearch) ||
        product.brand?.toLowerCase().includes(lowerSearch) ||
        product.category?.toLowerCase().includes(lowerSearch)
    );

    switch (sort) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "name-asc":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "rating-desc":
        result.sort((a, b) => b.rating - a.rating);
        break;
      
    }

    return result;
  }, [products, searchValue, sort]);

  return (
    <section className="container mx-auto py-10 mt-20">
      <h2 className="text-2xl font-semibold text-center mb-6">All Products</h2>

      
      <div className="flex flex-col md:flex-row gap-4 justify-between mb-6">
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search products by name, brand, or category..."
          className="border px-3 py-2 rounded w-full md:w-80"
        />

        <select
          value={sort}
          onChange={(e) => updateParams("sort", e.target.value)}
          className="border px-3 py-2 rounded w-full md:w-60"
        >
          <option value="">Sort By</option>
          <option value="price-asc">Price: Low → High</option>
          <option value="price-desc">Price: High → Low</option>
          <option value="name-asc">Name: A → Z</option>
          <option value="name-desc">Name: Z → A</option>
          <option value="rating-desc">Rating: High → Low</option>
       
        </select>
      </div>

 
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product: any) => (
          <div
            key={product.id}
            className="border rounded-lg overflow-hidden hover:shadow-lg transition"
          >
            <div className="relative w-full h-56">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="w-full"
              />
            </div>

            <div className="p-4">
              <h3 className="font-semibold">Name: {product.name}</h3>
              <p className="font-semibold" >Category: <span className="text-sm text-gray-500">{product.category}</span></p>
              <p className="font-semibold">Brand: <span className="text-sm text-gray-500">{product.brand}</span></p>
              <p className="font-semibold">Description: <span className="text-sm text-gray-500">{product.description}</span></p>
              <p className="font-bold mt-2">Price: ${product.price}</p>

              <div className="flex gap-1 mt-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.round(product.rating)
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>

            <Link href={`/products/${product.id}`}>
              <Button className="w-full rounded-none">View Details</Button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllProducts;
