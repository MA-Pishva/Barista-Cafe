import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "./_slideshow.scss";
import bestFriends from "./../../assets/images/slides/best-friends.jpg";
import waitress from "./../../assets/images/slides/waitress.jpg";
import youngFemale from "./../../assets/images/slides/young-female.jpg";

const Slideshow = () => {
  const images = [bestFriends, waitress, youngFemale];
  return (
    <>
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 3200, disableOnInteraction: false }}
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
    </>
  );
};

export default Slideshow;
