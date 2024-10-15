import "./_welcome.scss";

const Welcome = () => {
  return (
    <div className="welcome">
      <p className="welcome-to">welcome to Barista.co</p>
      <h1 className="cafe-name">Cafe Klang</h1>
      <p className="text">your favourite coffee daily lives.</p>
      <div>
        <button type="button" className="btn btn-outline-light">
          Our Story
        </button>
        <button type="button" className="btn btn-primary">
          Check Menu
        </button>
      </div>
    </div>
  );
};

export default Welcome;
