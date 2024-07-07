import { Data } from "../helpers/data";
import "../styles/Menu.css";
import MenuItem from "../components/MenuItem";
function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Burgerlarımız</h1>
      <div className="menuList">
        {Data.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              content={menuItem.content}
              price={menuItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
