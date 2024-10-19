import Navbar from "../../components/Navbar";
import Welcome from "../../components/Welcome";
import About from "../../components/About";
import OurMenu from "../../components/OurMenu";
import Reviews from "../../components/Reviews";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import { RefObject, useRef } from "react";
import "./_homepage.scss";

export const scrollToSection = (ref: RefObject<HTMLDivElement>) => {
  if (!ref.current) return;

  const element = ref.current;
  const targetPosition =
    element.getBoundingClientRect().top + window.pageYOffset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 1000;
  let start: number | null = null;

  const step = (timestamp: number) => {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    const progressPercentage = Math.min(progress / duration, 1);
    window.scrollTo(0, startPosition + distance * progressPercentage);

    if (progress < duration) {
      window.requestAnimationFrame(step);
    }
  };

  window.requestAnimationFrame(step);
};

const HomePage = () => {
  const welcomeRef = useRef(null);
  const aboutRef = useRef(null);
  const menuRef = useRef(null);
  const reviewsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <Navbar
        scrollToSection={scrollToSection}
        refs={[welcomeRef, aboutRef, menuRef, reviewsRef, contactRef]}
      />
      <Welcome ref={welcomeRef} />
      <About ref={aboutRef} />
      <OurMenu ref={menuRef} />
      <Reviews ref={reviewsRef} />
      <Contact ref={contactRef} />
      <Footer />
    </>
  );
};

export default HomePage;
