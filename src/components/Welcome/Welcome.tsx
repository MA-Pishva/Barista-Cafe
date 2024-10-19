import Slideshow from "../Slideshow";
import Guide from "../Guide";
import "./_welcome.scss";

const Welcome = () => {
  return (
    <div className="welcome" id="Welcome">
      <Slideshow />
      <div className="rectangle"></div>
      <Guide />
    </div>
  );
};

export default Welcome;
