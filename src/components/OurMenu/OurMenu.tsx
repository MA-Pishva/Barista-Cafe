import { forwardRef } from "react";
import Menu from "../Menu";
import "./_ourmenu.scss";

const OurMenu = forwardRef<HTMLDivElement>((_props, ref) => {
  return (
    <div className="our-menu" id="OurMenu" ref={ref}>
      <Menu
        menuOffering="Delicious Menu"
        menuCategory="Breakfast"
        menuItems={[
          {
            name: "Pancakes",
            price: 12.5,
            description: "Fresh brewed coffee and steamed milk",
          },
          {
            name: "Toasted Waffle",
            price: 12.0,
            description: "Brewed coffee and steamed milk",
            discount: 16.5,
          },
          {
            name: "Fried Chips",
            price: 15.0,
            description: "Rich Milk and Foam",
            recommend: true,
          },
          {
            name: "Pancakes",
            price: 12.5,
            description: "Fresh brewed coffee and steamed milk",
          },
          {
            name: "Banana Cakes",
            price: 18.0,
            description: "Rich Milk and Foam",
          },
        ]}
      />
      <Menu
        menuOffering="Favourite Menu"
        menuCategory="Coffee"
        menuItems={[
          {
            name: "Latte",
            price: 7.5,
            description: "Fresh brewed coffee and steamed milk",
            discount: 12.5,
          },
          {
            name: "White Coffee",
            price: 5.9,
            description: "Brewed coffee and steamed milk",
            recommend: true,
          },
          {
            name: "Chocolate Milk",
            price: 5.5,
            description: "Rich Milk and Foam",
          },
          {
            name: "Greentea",
            price: 7.5,
            description: "Fresh brewed coffee and steamed milk",
          },
          {
            name: "Dark Chocolate",
            price: 7.25,
            description: "Rich Milk and Foam",
          },
        ]}
      />
    </div>
  );
});

export default OurMenu;
