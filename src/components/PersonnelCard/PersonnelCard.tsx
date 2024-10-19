import Tag from "../Tag";
import "./_personnelcard.scss";

interface PersonnelCardProps {
  children: string;
  title: string;
  role: string;
  img: string;
}

const PersonnelCard = ({ title, role, img, children }: PersonnelCardProps) => {
  return (
    <div className="personnel">
      <img src={img} className="card-img" alt={title} />
      <div className="card-content">
        <div className="card-header">
          <h2 className="card-title">{title}</h2>
          <Tag>{role}</Tag>
        </div>
        <p className="card-description">{children}</p>
      </div>
    </div>
  );
};

export default PersonnelCard;
