import CustomerCard from "../CustomerCard";
import { forwardRef } from "react";
import senior from "./../../assets/images/reviews/senior-man-white-sweater-eyeglasses.jpg";
import youngWoman from "./../../assets/images/reviews/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair.jpg";
import beautifulWoman from "./../../assets/images/reviews/young-woman-with-round-glasses-yellow-sweater.jpg";
import "./_reviews.scss";

const Reviews = forwardRef<HTMLDivElement>((_props, ref) => {
  return (
    <div className="review" id="Review" ref={ref}>
      <div className="review-header">
        <em>Reviews by Customers</em>
        <h2>Testimonials</h2>
      </div>
      <div className="review-body">
        <div className="cards">
          <CustomerCard name="Sandra" img={youngWoman} rate={4.5}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum,
            magnam aperiam. Omnis ex error eveniet accusamus aliquam delectus
            veritatis ipsa.
          </CustomerCard>
          <CustomerCard name="Don" img={senior} rate={5}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum,
            magnam aperiam. Omnis ex error eveniet accusamus aliquam delectus
            veritatis ipsa.
          </CustomerCard>
          <CustomerCard name="Olivia" img={beautifulWoman} rate={4.25}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum,
            magnam aperiam. Omnis ex error eveniet accusamus aliquam delectus
            veritatis ipsa.
          </CustomerCard>
        </div>
      </div>
    </div>
  );
});

export default Reviews;
