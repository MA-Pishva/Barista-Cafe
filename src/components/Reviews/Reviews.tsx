import CustomerCard from "../CustomerCard";
import "./_reviews.scss";

const Reviews = () => {
  return (
    <div className="review">
      <div className="review-header">
        <em>Reviews by Customers</em>
        <h2>Testimonials</h2>
      </div>
      <div className="review-body">
        <div className="cards">
          <CustomerCard
            name="Sandra"
            img="src/assets/images/reviews/young-woman-with-round-glasses-yellow-sweater.jpg"
            rate={4.5}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum,
            magnam aperiam. Omnis ex error eveniet accusamus aliquam delectus
            veritatis ipsa.
          </CustomerCard>
          <CustomerCard
            name="Don"
            img="src/assets/images/reviews/senior-man-white-sweater-eyeglasses.jpg"
            rate={5}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum,
            magnam aperiam. Omnis ex error eveniet accusamus aliquam delectus
            veritatis ipsa.
          </CustomerCard>
          <CustomerCard
            name="Olivia"
            img="src/assets/images/reviews/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair.jpg"
            rate={4.25}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum,
            magnam aperiam. Omnis ex error eveniet accusamus aliquam delectus
            veritatis ipsa.
          </CustomerCard>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
