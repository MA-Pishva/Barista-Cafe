import Card from "../Card/Card";
import "./_meetPeople.scss";

const MeetPeople = () => {
  return (
    <div className="meet-people">
      <p className="creative">Creative Baristas</p>
      <h2 className="meet-title">Meet People</h2>
      <div className="cards">
        <Card
          title="Steve"
          role="Boss"
          img="src/assets/images/team/portrait-elegant-old-man-wearing-suit.jpg"
        >
          your favourite coffee daily lives tempor.
        </Card>
        <Card
          title="Sandra"
          role="Manager"
          img="src/assets/images/team/cute-korean-barista-girl-pouring-coffee-prepare-filter-batch-brew-pour-working-cafe.jpg"
        >
          your favourite coffee daily lives.
        </Card>
        <Card
          title="Jackson"
          role="Senior"
          img="src/assets/images/team/small-business-owner-drinking-coffee.jpg"
        >
          your favourite coffee daily lives.
        </Card>
        <Card
          title="Michelle"
          role="Barista"
          img="src/assets/images/team/smiley-business-woman-working-cashier.jpg"
        >
          your favourite coffee daily lives.
        </Card>
      </div>
    </div>
  );
};

export default MeetPeople;
