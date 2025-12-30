/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { Button } from "@/components/ui/Button";

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://your-api.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!product) return <p>Product not found</p>;

  return (
    <section className="container mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="relative w-full md:w-1/2 h-80 md:h-[500px]">
          <Image src={product.image} alt={product.name} fill className="object-cover" />
        </div>

        <div className="md:w-1/2 flex flex-col gap-4">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-500">{product.category}</p>
          <p className="text-xl font-semibold">${product.price}</p>

          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }, (_, i) => (
              <FaStar
                key={i}
                className={`w-5 h-5 ${i < Math.round(product.rating) ? "text-yellow-400" : "text-gray-300"}`}
              />
            ))}
            <span className="ml-2">({product.rating})</span>
          </div>

          <p className="mt-4">{product.description}</p>

          <Button className="w-full mt-6">Add to Cart</Button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
