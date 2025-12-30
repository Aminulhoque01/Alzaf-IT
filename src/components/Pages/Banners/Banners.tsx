"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay"

import Link from "next/link";
import { useRef } from "react";

type Banner = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  link: string;
  buttonText: string;
};

const Banners = ({ banners }: { banners: Banner[] }) => {
  const plugin =  useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <section className="w-full mt-[80px] ">
      <Carousel plugins={[plugin.current]} onMouseEnter={plugin.current.stop}
        className="w-full container m-auto">
        <CarouselContent>
          {banners.map((banner) => (
            <CarouselItem key={banner.id}>
              <div className="relative w-full h-[400px] md:h-[500px]">
                <Image
                  src={banner.image}
                  alt={banner.title}
                  fill
                  className="rounded-md"
                />

                
                <div className="absolute inset-1 flex items-end">
                  <div className="w-full pl-10">
                    <div className="px-6 py-10 text-white max-w-xl">
                      <p className="mb-4">{banner.description}</p>

                      <Link
                        href={banner.link}
                        className="inline-block bg-white text-black px-6 py-3 rounded-md font-medium"
                      >
                        {banner.buttonText}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation */}
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default Banners;
