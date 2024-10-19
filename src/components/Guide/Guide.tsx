import Button from "../Button";
import "./_guide.scss";

const Guide = () => {
  return (
    <div className="guide">
      <p className="guide-address">welcome to Barista.co</p>
      <h1 className="guide-title">Cafe Klang</h1>
      <p className="guide-brief">your favourite coffee daily lives.</p>
      <div className="button">
        <Button type="btn-outline">Our Story</Button>
        <Button>Check Menu</Button>
      </div>
    </div>
  );
};

export default Guide;
