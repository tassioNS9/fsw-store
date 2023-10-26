"use client";

import ProductItem from "@/components/ui/product-item";
import { computeProductTotalPrice } from "@/helpers/product";
import { Product } from "@prisma/client";
import { Button } from "./button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef } from "react";

interface ProductListProps {
  products: Product[];
}

const ProductList = ({ products }: ProductListProps) => {
  const elementRef = useRef(null);

  const handleHorizantalScroll = (element : any, speed :number, distance : number, step : number) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
    }, speed);
  };



  return (
    // No CSS esta escondendo o scroobar mas com o celular da pra rolar pro lado
    <div className="flex items-center justify-center px-1 z-50">
      <Button size="icon" variant="outline" onClick={()=>handleHorizantalScroll(elementRef.current, 80, 100, -250)}>
        <ChevronLeft />
      </Button>
      <div
        className="flex w-full gap-4 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden transition-all delay-75  scroll-smooth"
        ref={elementRef}
      >
        {products.map((product) => (
          <div key={product.id} className="w-[170px] max-w-[170px]">
            <ProductItem product={computeProductTotalPrice(product)} />
          </div>
        ))}
      </div>
      <Button size="icon" variant="outline">
        <ChevronRight onClick={()=>handleHorizantalScroll(elementRef.current, 80, 100, 250)} />
      </Button>
    </div>
  );
};

export default ProductList;
