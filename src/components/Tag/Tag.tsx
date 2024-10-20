import "./_tag.scss";

interface TagProps {
  children: string;
}

const Tag = ({ children }: TagProps) => {
  return <div className="tag">{children}</div>;
};

export default Tag;
