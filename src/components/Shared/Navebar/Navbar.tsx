/* eslint-disable @typescript-eslint/no-explicit-any */
 
import getCategories from "@/Data/categories";
import Link from "next/link";

const Navbar = async () => {
  const categories = await getCategories();
 const result = categories?.data?.categories;
 console.log(result)

  return (
    <header className="w-full h-[80px] fixed top-0 z-50 bg-[#F5F5F5]">
      <nav className="container mx-auto px-8 flex justify-between items-center h-full">
        <h1 className="text-2xl font-bold">Alzaf</h1>

        <ul className="hidden md:flex gap-6">
          {result?.map((cat: any) => (
             
             <li key={cat.id}>
              <Link
                href={`/category/${cat.slug ?? cat.id}`}
                className="cursor-pointer font-medium hover:text-blue-600 transition"
              >
                {cat.name}
              </Link>
            </li>
            
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;