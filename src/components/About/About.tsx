import { Link } from "react-router-dom";
import Button from "../Button";
import PersonnelCard from "../PersonnelCard";
import boss from "./../../assets/images/team/boss.jpg";
import manager from "./../../assets/images/team/manager.jpg";
import senior from "./../../assets/images/team/senior.jpg";
import barista from "./../../assets/images/team/barista.jpg";
import "./_about.scss";

const About = () => {
  return (
    <div className="about" id="About">
      <div className="about-cafe">
        <div className="video-container">
          <video width="456" height="456" autoPlay muted loop>
            <source
              src="src/assets/videos/pexels-mike-jones-9046237.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="overlay-text">
            <p>We Started Since 2009.</p>
            <p>Best Cafe in Klang.</p>
          </div>
        </div>

        <div className="cafe-header">
          <p className="cafe-address">Barista.co</p>
          <h2 className="cafe-title">Cafe KL</h2>
          <div className="cafe-description">
            <p>
              The café had been in the town for as long as anyone could
              remember, and it had become a beloved institution among the
              locals.
            </p>
            <p>
              Café KL, with its rustic charm and welcoming atmosphere, was more
              than just a coffee spot. It was a place where the hustle of the
              town softened, and people could unwind, catching up with neighbors
              or simply enjoying a quiet moment with a cup in hand.
            </p>
          </div>
          <Link to="#About">
            <Button type="btn-outline">Meet Baristas</Button>
          </Link>
        </div>
      </div>
      <div className="about-people">
        <div className="about-people-header">
          <em>Creative Baristas</em>
          <h2>Meet People</h2>
        </div>
        <div className="personnel-cards">
          <PersonnelCard title="Steve" role="boss" img={boss}>
            Leading with vision and decisive action.
          </PersonnelCard>
          <PersonnelCard title="Sandra" role="manager" img={manager}>
            Expertly managing teams and driving success.
          </PersonnelCard>
          <PersonnelCard title="Jackson" role="senior" img={senior}>
            Capable worker delivering good results.
          </PersonnelCard>
          <PersonnelCard title="Michelle" role="barista" img={barista}>
            Crafting exceptional coffee with a smile.
          </PersonnelCard>
        </div>
      </div>
    </div>
  );
};

export default About;
