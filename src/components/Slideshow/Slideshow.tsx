import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/scss";
import "swiper/css/effect-fade";
import bestFriends from "./../../assets/images/slides/best-friends.jpg";
import waitress from "./../../assets/images/slides/waitress.jpg";
import youngFemale from "./../../assets/images/slides/young-female.jpg";
import "./_slideshow.scss";

const Slideshow = () => {
  const images = [bestFriends, waitress, youngFemale];
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    const handleSlideChange = () => {
      const slides = document.querySelectorAll(".zoom-slide");
      slides.forEach((slide) => {
        (slide as HTMLElement).style.animation = "none";
        setTimeout(() => {
          (slide as HTMLElement).style.animation = "";
        }, 10);
      });
    };

    if (swiperRef.current) {
      swiperRef.current.swiper.on("slideChange", handleSlideChange);
    }

    return () => {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.off("slideChange", handleSlideChange);
      }
    };
  }, []);

  return (
    <Swiper
      ref={swiperRef}
      modules={[Pagination, Autoplay, EffectFade]}
      slidesPerView={1}
      autoplay={{ delay: 4200, disableOnInteraction: false }}
      loop={true}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      className="zoom-swiper"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img src={image} alt={`Slide ${index}`} className="zoom-slide" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slideshow;
