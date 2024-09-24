import { ICartItem } from "../interfaces/interface";
import { Link } from "react-router-dom";

const Header: React.FC<{ cartItems: ICartItem[] }> = ({ cartItems }) => {
  return (
    <div className="h-14 shadow-md flex justify-between items-center px-6 py-3 bg-primary">
      <Link className="text-white" to={"/"}>
        E-Commerce
      </Link>
      <Link
        className="text-white bg-secondary py-2 px-3 relative"
        to={"/my-cart"}
      >
        <i className="fa-solid fa-cart-shopping"></i>
        {Boolean(cartItems.length) && (
          <p className="text-[10px] bg-red-600 text-white py-1 px-2 absolute rounded-full -top-1.5 -right-1.5">
            {cartItems.length}
          </p>
        )}
      </Link>
    </div>
  );
};

export default Header;
