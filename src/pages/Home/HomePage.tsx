import Navbar from "../../components/Navbar";
import Welcome from "../../components/Welcome";
import About from "../../components/About";
import OurMenu from "../../components/OurMenu";
import Reviews from "../../components/Reviews";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import "./_homepage.scss";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Welcome />
      <About />
      <OurMenu />
      <Reviews />
      <Contact />
      <Footer />
    </>
  );
};

export default HomePage;
