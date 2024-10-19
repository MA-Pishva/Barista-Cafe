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
    <div className="personnel-card">
      <img src={img} className="personnel-card-img" alt={title} />
      <div className="personnel-card-content">
        <div className="personnel-card-header">
          <h2 className="personnel-card-title">{title}</h2>
          <Tag>{role}</Tag>
        </div>
        <p className="personnel-card-description">{children}</p>
      </div>
    </div>
  );
};

export default PersonnelCard;
