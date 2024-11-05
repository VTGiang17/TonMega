// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// @ts-expect-error can ignore this
import "swiper/css";
import SliderCard from "./SliderCard";
import { BtnNext, BtnPrev } from "../../common/ShareIcon";
import { Flex } from "antd";
import { BREAKPOINTS } from "../../../utils/breakpoint";
import { useEffect, useState } from "react";

export const Slider = () => {
  const [screen, setScreen] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setScreen(window.innerWidth));

    return () => {
      window.removeEventListener("resize", () => setScreen(window.innerWidth));
    };
  }, []);
  return (
    <Flex vertical className="w-full">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={24}
        slidesPerView={screen < BREAKPOINTS.xl ? 1 : 3}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        loop
        className="w-full overflow-x-clip"
      >
        <SwiperSlide className="text-white">
          <SliderCard />
        </SwiperSlide>
        <SwiperSlide className="text-white">
          <SliderCard />
        </SwiperSlide>
        <SwiperSlide className="text-white">
          <SliderCard />
        </SwiperSlide>
        <SwiperSlide className="text-white">
          <SliderCard />
        </SwiperSlide>
      </Swiper>
      <Flex className="w-full justify-center items-center ">
        <div className="swiper-button-next m-[12px] flex justify-center items-center p-2 rounded-[50px]  w-[40px] h-[40px] max-w-[52px] max-h-[52px] bg-neonDark xl:w-[52px] xl:h-[52px] ">
          <BtnNext />
        </div>
        <div className="swiper-button-prev m-[12px] flex justify-center items-center p-2 rounded-[50px]  w-[40px] h-[40px] max-w-[52px] max-h-[52px] bg-neonDark xl:w-[52px] xl:h-[52px] ">
          <BtnPrev />
        </div>
      </Flex>
    </Flex>
  );
};
