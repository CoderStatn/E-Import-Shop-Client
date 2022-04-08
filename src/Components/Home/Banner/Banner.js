import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectFade, Pagination } from "swiper";

const Banner = () => {
  return (
    <Swiper
      effect={"fade"}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      slidesPerView={"auto"}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Autoplay, EffectFade, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img
          style={{ width: "100%" }}
          src="https://demo.webdigify.com/OPC01/OPC012_gobazar/image/cache/catalog/Main-banner-2-1903x520.jpg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          style={{ width: "100%" }}
          src="https://demo.webdigify.com/OPC01/OPC012_gobazar/image/cache/catalog/Main-banner-1-1903x520.jpg"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
