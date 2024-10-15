import CafeKL from "../../components/CafeKL/CafeKL";
import MeetPeople from "../../components/MeetPeople/MeetPeople";
import "./_about.scss";

const About = () => {
  return (
    <>
      <div className="about-cafe">
        <div className="video-container">
          <div className="video-wrapper">
            <video width="456" height="456" autoPlay muted loop>
              <source
                src="src/assets/videos/pexels-mike-jones-9046237.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="overlay-text">
            <p>We Started Since 2009.</p>
            <p>Best Cafe in Klang.</p>
          </div>
        </div>

        <CafeKL />
      </div>
      <div className="about-people">
        <div className="people">
          <MeetPeople />
        </div>
      </div>
    </>
  );
};

export default About;
