import MenuList from "../../components/MenuList/MenuList";
import "./_menu.scss";

const Menu = () => {
  return (
    <div className="menus">
      <div className="cover">
        <p className="menu-type">Delicious Menu</p>
        <h2 className="menu-time">Breakfast</h2>
        <MenuList
          items={[
            "Pancakes",
            "Toasted Waffle",
            "Fried Chips",
            "Pancakes",
            "Banana Cakes",
          ]}
          description={[
            "Fresh brewed coffee and steamed milk",
            "Brewed coffee and steamed mil",
            "Rich Milk and Foam",
            "Fresh brewed coffee and steamed milk",
            "Rich Milk and Foam",
          ]}
          prices={[12.5, 12.0, 15.0, 12.5, 18.0]}
          recommend={2}
        />
      </div>
      <div className="cover">
        <p className="menu-type">Favourite Menu</p>
        <h2 className="menu-time">Coffee</h2>
        <MenuList
          items={[
            "Latte",
            "White Coffee",
            "Chocolate Milk",
            "Greentea",
            "Dark Chocolate",
          ]}
          description={[
            "Fresh brewed coffee and steamed milk",
            "Brewed coffee and steamed mil",
            "Rich Milk and Foam",
            "Fresh brewed coffee and steamed milk",
            "Rich Milk and Foam",
          ]}
          prices={[7.5, 5.9, 5.5, 7.5, 7.25]}
          recommend={1}
        />
      </div>
    </div>
  );
};

export default Menu;
