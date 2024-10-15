import "./_card.scss";

interface CardProps {
  title: string;
  role: string;
  img: string;
  children: string;
}

const Card = ({ title, role, img, children }: CardProps) => {
  return (
    <div className="card">
      <img src={img} className="card-img" alt={title} />
      <div className="card-content">
        <div className="card-header">
          <h2 className="card-title">{title}</h2>
          <span className="card-tag">{role}</span>
        </div>
        <p className="card-text">{children}</p>
      </div>
    </div>
  );
};

export default Card;
