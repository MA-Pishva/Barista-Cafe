import Tag from "../Tag";
import "./_menu.scss";

interface Item {
  name: string;
  price: number;
  description: string;
  discount?: number;
  recommend?: boolean;
}

interface MenuProps {
  menuOffering: string;
  menuCategory: string;
  menuItems: Item[];
}

const Menu = ({ menuOffering, menuCategory, menuItems }: MenuProps) => {
  return (
    <div className="menu">
      <div className="menu-header">
        <em>{menuOffering}</em>
        <h2>{menuCategory}</h2>
      </div>
      <div className="menu-items">
        {menuItems.map((menuItem, index) => (
          <div className="menu-item" key={index}>
            <div className="item-header">
              <div className="item-intro">
                <h6 className="item-name">{menuItem.name}</h6>
                {menuItem.recommend && (
                  <div>
                    <Tag>Recommend</Tag>
                  </div>
                )}
              </div>
              <div className="price">
                {menuItem.discount && (
                  <strong className="old-price">
                    ${menuItem.discount.toFixed(2)}
                  </strong>
                )}
                <strong className="item-price">
                  ${menuItem.price.toFixed(2)}
                </strong>
              </div>
            </div>
            <div className="item-description">{menuItem.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
