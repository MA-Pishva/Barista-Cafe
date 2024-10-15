import Slideshow from "../../components/Slideshow/Slideshow";
import Welcome from "../../components/Welcome/Welcome";
import "./_home.scss";

const Home = () => {
  return (
    <>
      <Slideshow />
      <div className="rectangle"></div>
      <Welcome />
    </>
  );
};

export default Home;
