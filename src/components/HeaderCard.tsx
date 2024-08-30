"use client";

import React, { useState, useRef, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { carouselData } from "../../constants";

const HeaderCard = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentItemIndex, setCurrentItemIndex] = useState(1);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const totalItems = carouselData.length;

  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        const maxScrollLeft = scrollWidth - clientWidth;

        if (maxScrollLeft > 0) {
          const scrollFraction = scrollLeft / maxScrollLeft;
          setScrollProgress(scrollFraction * 100);

          // Calculate the visible item index based on scroll position
          const itemWidth = clientWidth; // Assuming each item takes full width
          const visibleItemIndex = Math.floor(scrollLeft / itemWidth) + 1;
          setCurrentItemIndex(Math.min(visibleItemIndex, totalItems));
        }
      }
    };

    const carouselElement = carouselRef.current;
    if (carouselElement) {
      carouselElement.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (carouselElement) {
        carouselElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, [totalItems]);

  return (
    <>
      {/* Highlight section */}
      <div className="flex items-center justify-between w-full relative mb-4">
        <span className="text-sm font-medium text-white">01</span>
        <div className="relative flex-1 mx-4">
          <hr className="absolute inset-0 border-t-2 border-gray-400" />
          {/* Highlight bar */}
          <div
            className="absolute bg-white h-[2px] rounded-full border-t-4 transition-all duration-300"
            style={{
              width: `${scrollProgress}%`,
            }}
          />
        </div>
        <span className="text-sm font-medium text-white">
          {String(currentItemIndex).padStart(2, '0')}
        </span>
      </div>

      {/* Carousel */}
      <Carousel opts={{ align: "start" }} className="w-sm max-w-[350px] h-44">
        <CarouselContent ref={carouselRef} className="carousel-container flex space-x-2 overflow-x-auto">
          {carouselData.map((item, index) => (
            <CarouselItem key={index} className="w-[350px] flex-shrink-0 carousel-item">
              <div className="flex flex-col md:flex-row p-2 rounded-md h-32 btn_white cursor-pointer">
                {/* Image on the left side */}
                <div className="flex-shrink-0">
                  <img
                    src={item.imgSrc}
                    alt={`Image ${index + 1}`}
                    className="aspect-square w-[98px] h-[98px] rounded-lg object-cover"
                  />
                </div>

                {/* Text on the right side */}
                <div className="flex flex-col justify-center ml-4 h-full">
                  <h2 className="text-lg font-medium mb-1">{item.title}</h2>
                  <p className="mt-4 text-white">{item.description}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
};

export default HeaderCard;
