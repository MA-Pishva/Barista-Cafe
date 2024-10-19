import Slideshow from "../Slideshow";
import Guide from "../Guide";
import { forwardRef } from "react";
import "./_welcome.scss";

const Welcome = forwardRef<HTMLDivElement>((_props, ref) => {
  return (
    <div className="welcome" id="welcome" ref={ref}>
      <Slideshow />
      <div className="rectangle"></div>
      <Guide />
    </div>
  );
});

export default Welcome;
