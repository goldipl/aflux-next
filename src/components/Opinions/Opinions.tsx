"use client";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "@/components/Opinions/opinions_swiper.scss";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default () => {
  return (
    <>
      <h1 className="text-5xl pt-16 text-center">Opinie</h1>
      <Swiper
        className="relative"
        id="opinions"
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        autoplay={{
          delay: 3500,
          disableOnInteraction: true,
        }}
        direction="horizontal"
        effect="slide"
      >
        <SwiperSlide>
          <div className="flex flex-col items-center justify-center h-full">
            <p className="text-lg mb-2 w-[50vw] text-center">
              Krem Aflux to rewelacyjny produkt do pielęgnacji ciała. Skóra
              staje się wyraźnie wygładzona i miękka w dotyku. Lekka formuła
              kremu szybko się wchłania, a jego bogaty skład dba o intensywne
              nawilżenie. Polecam każdemu, kto szuka skutecznego i przyjemnego w
              użyciu kremu do ciała.
            </p>
            <p className="text-sm italic">~ Daniel</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center justify-center h-full">
            <p className="text-lg mb-2 w-[50vw] text-center">
              Aflux to krem, który zrewolucjonizował moją pielęgnację ciała.
              Skóra jest po nim niesamowicie gładka i miękka. Bardzo polecam!
            </p>
            <p className="text-sm italic">~ Magda</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center justify-center h-full">
            <p className="text-lg mb-2 w-[50vw] text-center">
              Jestem zachwycona efektami kremu Aflux. Moja skóra nigdy wcześniej
              nie była tak dobrze nawilżona i wygładzona. To absolutny must-have
              w mojej łazience!
            </p>
            <p className="text-sm italic">~ Agnieszka</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center justify-center h-full">
            <p className="text-lg mb-2 w-[50vw] text-center">
              Krem Aflux to prawdziwa perełka wśród produktów do pielęgnacji
              ciała. Po jego użyciu skóra odzyskuje jędrność i elastyczność.
              Jestem pod wrażeniem!
            </p>
            <p className="text-sm italic">~ Karolina</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center justify-center h-full">
            <p className="text-lg mb-2 w-[50vw] text-center">
              Używam kremu Aflux od kilku tygodni i efekty są rewelacyjne. Moja
              skóra wygląda znacznie lepiej, jest bardziej nawilżona i
              wygładzona. To najlepszy krem, jaki kiedykolwiek miałam!
            </p>
            <p className="text-sm italic">~ Aniela</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center justify-center h-full">
            <p className="text-lg mb-2 w-[50vw] text-center">
              Aflux to mój ulubiony krem do ciała. Jego lekka formuła sprawia,
              że szybko się wchłania, nie pozostawiając tłustej warstwy. Skóra
              jest po nim niesamowicie miękka i gładka. Naprawdę warto go
              wypróbować!
            </p>
            <p className="text-sm italic">~ Małgorzata</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};