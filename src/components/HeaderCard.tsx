"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { carouselData } from "../../constants";

const HeaderCard = () => {
  return (
    <>
   <div className="flex items-center justify-between w-full relative mb-4">
  <span className="text-sm font-medium text-white">01</span>
  <div className="relative flex-1 mx-4">
    <hr className="absolute inset-0 border-t-2 border-gray-400" />
    <div className="absolute inset-0 bg-white h-[2px] w-32 left-0 rounded-full border-t-4" /> 
  </div>
  <span className="text-sm font-medium text-white">03</span>
</div>


      <Carousel
        opts={{
          align: "start",
        }}
        className="w-sm max-w-[350px] h-44"
      >
        <CarouselContent>
          {carouselData.map((item, index) => (
            <CarouselItem key={index} className="w-sm">
              <div className="flex flex-col md:flex-row p-2 rounded-md h-32 btn_white">
                {/* Image on the left side */}
                <div className="flex-shrink-0">
                  <img
                    src={item.imgSrc}
                    alt={`Image ${index + 1}`}
                    className="aspect-square w-[98px] h-[98px] rounded-lg object-cover justify-center "
                  />
                </div>

                {/* Text on the right side */}
                <div className="flex flex-col justify-center ml-4 h-full">
                  <h2 className="text-lg font-medium mb-1">{item.title}</h2>
                  <p className="mt-4  text-white">{item.description}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
};
export default HeaderCard;
