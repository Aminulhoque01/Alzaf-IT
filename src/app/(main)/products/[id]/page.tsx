/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { Button } from "@/components/ui/Button";
import singleProduct from "@/Data/singleProduct";
import { notFound } from "next/navigation";
import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";

type PageProps = {
  params: {
    id: string;
  };
};

const ProductDetail = async ({ params }: PageProps) => {
  const { id } = await params;

  const res = await singleProduct(id);

  if (!res || !res.data?.product) {
    notFound();
  }

  const { product,  similarProducts } = res.data;

  return (
    <section className="container mx-auto px-4 py-10 ">
        <div className="flex items-center justify-between mt-10 mb-2">
            <Link href="/"><Button className="flex items-center gap-2"><IoMdArrowRoundBack />Back</Button></Link>
            <h1 className="text-3xl font-semibold">Product details</h1>
        </div>
      <div className="flex flex-col md:flex-row gap-8 mt-5 ">
        <div className="relative w-full md:w-1/2 h-[450px] border p-5">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className=" rounded-md"
          />
        </div>

        <div className="md:w-1/2 space-y-4 border p-5">
          <h1 className="text-3xl font-bold">Name: {product.name}</h1>
          <p className="text-gray-500">Brand: {product.brand}</p>

          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <FaStar
                key={i}
                className={
                  i < Math.round(product.rating)
                    ? "text-yellow-400"
                    : "text-gray-300"
                }
              />
            ))}
            <span className="ml-2 text-sm">Rating: ({product.rating})</span>
          </div>

          <p className="text-2xl font-semibold">Price: ${product.price}</p>
          <p className="text-md font-semibold">Category: {product.category}</p>
          <p className="text-md font-semibold ">Stock: <span className="text-green-700 font-[700] text-[15px]">{product.stock}</span></p>
          <p className="text-md font-semibold ">Description: <span className="text-[14px] text-gray-700">{product.description}</span></p>

          <Button className="w-full mt-4">Add to Cart</Button>
        </div>
      </div>

      <div className="pt-5">
        <h2 className="text-2xl font-semibold mb-6 text-center">Similar Products</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {similarProducts.map((item: any) => (
            <div key={item.id} className="border p-4 rounded-lg">
              <Image
                src={item.image}
                alt={item.name}
                width={200}
                height={150}
                className="rounded w-full"
              />
              <p className="mt-2 font-medium">{item.name}</p>
              <p className="text-sm text-gray-500">${item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
