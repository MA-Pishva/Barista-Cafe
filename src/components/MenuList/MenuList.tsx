import "./_menulist.scss";

interface MenuListProps {
  items: string[];
  prices: number[];
  description: string[];
  recommend?: number;
}

const MenuList = ({
  items,
  prices,
  description,
  recommend = -1,
}: MenuListProps) => {
  return (
    <div className="menu-list">
      <div className="menu-items">
        {items.map((item, index) => (
          <div key={index}>
            <div className="menu-item-container">
              <h6 className="menu-item">
                {item}
                {index === recommend && <span className="tag">Recommend</span>}
              </h6>
              <strong className="menu-price">${prices[index]}</strong>
            </div>
            <div className="menu-description">{description[index]}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuList;
