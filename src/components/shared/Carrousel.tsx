"use client"
import { CaretLeft, CaretRight } from "phosphor-react";
import { ReactNode, useState } from "react";

type CarrouselProps = {
    slides : ReactNode[]
    selectSlide:(e:number)=>void
}

export function Carrousel({slides,selectSlide}:CarrouselProps){
    const [currentIndex, setCurrentIndex] = useState(1);

  
    const previous = () => {
      if (currentIndex > 1) {
        setCurrentIndex(currentIndex - 1);
        selectSlide(currentIndex - 1)
      }
    };
  
    const forward = () => {
      if (currentIndex < slides.length) {
        setCurrentIndex(currentIndex + 1);
        selectSlide(currentIndex + 1)

      }
    };
  
    return (
      <main className="grid w-full place-content-center">
        <div className="relative mx-auto max-w-2xl overflow-hidden rounded-md  p-2 sm:p-4">

  
          <button onClick={previous} className="absolute left-0 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-gray-100 opacity-40 shadow-md">
            <i className="text-2xl font-bold text-gray-500">
            <CaretLeft size={32} />
            </i>
          </button>
  
          <button onClick={forward} className="absolute right-0 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-gray-100 opacity-40 shadow-md">
            <i className="fas fa-chevron-right text-2xl font-bold text-gray-500">
            <CaretRight size={32} />
            </i>
          </button>
  
          <div className="relative h-80" style={{ width: '30rem' }}>
            {slides.map((slide, index) => (
              <div key={"component-"+index+"-slide"} className={`absolute top-0 ${currentIndex === index + 1 ? '' : 'hidden'}`}>
                {slide}
              </div>
            ))}
          </div>
        </div>
      </main>
    );
  };