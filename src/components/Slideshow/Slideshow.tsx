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
  return (
    <Swiper
      modules={[Pagination, Autoplay, EffectFade]}
      slidesPerView={1}
      autoplay={{ delay: 4200, disableOnInteraction: false }}
      loop={true}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      onSlideChange={(swiper) =>
        console.log("Slide changed. Active index:", swiper.activeIndex)
      }
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
