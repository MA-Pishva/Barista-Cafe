import Navbar from "../../components/Navbar";
import Welcome from "../../components/Welcome";
import About from "../../components/About";
import OurMenu from "../../components/OurMenu";
import "./_homepage.scss";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Welcome />
      <About />
      <OurMenu />
    </>
  );
};

export default HomePage;
