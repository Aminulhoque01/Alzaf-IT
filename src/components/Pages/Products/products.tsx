/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa6";


type ProductsProps = {
  products: any[];
  pagination: {
    totalPages: number;
     NextPage: boolean;
    PrevPage: boolean;
  };
  currentPage: number;
};

const Products = ({ products, pagination, currentPage }: ProductsProps) => {
  const totalPages = pagination?.totalPages || 1;

  const getPages = () => {
    const delta = 2;
    const start = Math.max(1, currentPage - delta);
    const end = Math.min(totalPages, currentPage + delta);

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  return (
    <section className="container mx-auto  py-10">
      <h2 className="text-2xl font-semibold mb-6 text-center">All Products</h2>

       
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products?.map((product: any) => (
          <div
            key={product.id}
            className="border rounded-lg overflow-hidden hover:shadow-lg transition"
          >
            <div className="relative w-full h-56">
              <Image
                src={product?.image}
                alt={product?.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex items-center  justify-between p-2">
              <div className="p-4">
                <h3 className="font-semibold">{product?.name}</h3>
                <p className="text-sm text-gray-500">{product?.category}</p>

                <p className="font-bold mt-2">${product?.price}</p>

                <div className="flex items-center">
                  <span>Rating:</span>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }, (_, i) => (
                      <FaStar
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.round(product?.rating)
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                     
                  </div>
                </div>
              </div>
            </div>

            <div className=" ">
              <Link href={`/products/${product.id}`}>
                <Button className="w-full">View Details</Button>
              </Link>
            </div>
          </div>
        ))}
      </div>

       
      <div className="flex justify-center gap-2 mt-10 flex-wrap">
        {pagination?.PrevPage && (
          <Link
            href={`/products?page=${currentPage - 1}`}
            className="px-3 py-2 border rounded"
          >
            Previous
          </Link>
        )}

        {getPages().map((page) => (
          <Link
            key={page}
            href={`/products?page=${page}`}
            className={`px-3 py-2 border rounded ${
              page === currentPage ? "bg-black text-white" : "hover:bg-gray-100"
            }`}
          >
            {page}
          </Link>
        ))}

        {pagination?. NextPage && (
          <Link
            href={`/products?page=${currentPage + 1}`}
            className="px-3 py-2 border rounded"
          >
            Next
          </Link>
        )}
      </div>
    </section>
  );
};

export default Products;
