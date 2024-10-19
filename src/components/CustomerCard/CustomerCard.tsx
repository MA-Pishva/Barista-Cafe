import "./_customercard.scss";

interface CustomerCardProps {
  children: string;
  name: string;
  img: string;
  rate: number;
}

const CustomerCard = ({ name, img, children, rate }: CustomerCardProps) => {
  const getStars = () => {
    const stars = [];
    for (let index = 1; index <= 5; index++) {
      if (index <= rate)
        stars.push(
          <img
            width="16px"
            height="16px"
            src="src/assets/images/star-full.svg"
            alt="Full-Star"
          />
        );
      else
        stars.push(
          <img
            width="16px"
            height="16px"
            src="src/assets/images/star-empty.svg"
            alt="Empty-Star"
          />
        );
    }
    return stars;
  };

  return (
    <div className="customer-card">
      <div className="customer-card-header">
        <img src={img} className="customer-card-img"></img>
        <div className="customer-card-title">
          <h2 className="customer-card-name">{name}</h2>
          <em className="customer-card-role">Customers</em>
        </div>
      </div>
      <div className="customer-card-body">
        <div className="customer-card-description">{children}</div>
        <div className="customer-card-rate">
          <div className="rate">{rate} Rating</div>
          <div className="customer-card-stars">{getStars()}</div>
        </div>
      </div>
    </div>
  );
};

export default CustomerCard;
