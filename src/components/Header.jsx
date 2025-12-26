import { useSelector } from "react-redux";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const cartitems = useSelector((store) => store.cart.items);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between bg-amber-400 items-center px-4 py-2 sticky top-0 z-50">


        <div className="w-full flex justify-between items-center my-3 md:my-0">
          <div className="logo flex items-center gap-2">
            <img
              src={LOGO_URL}
              alt="logo-image"
              className="w-12 md:w-14 rounded-full mr-3"
            />
            <h1 className="text-xl md:text-3xl font-semibold">
              Good Food, Good mood!
            </h1>
          </div>

          {/* mobile three dots */}
          <button
            className="md:hidden text-3xl font-bold"
            onClick={() => setShowMenu(!showMenu)}
          >
            ⋮
          </button>
        </div>

        {/* nav bar */}
        <div className="nav-bar">
          <ul
            className={`gap-6 text-lg md:text-xl font-semibold items-center my-3 md:my-0
              ${showMenu ? "flex flex-col" : "hidden"}
              md:flex md:flex-row`}
          >
            <li className="transition-transform duration-300 hover:scale-115 hover:text-white">
              <Link to="/">Home</Link>
            </li>
            <li className="transition-transform duration-300 hover:scale-115 hover:text-white">
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link
                to="/cart"
                className="flex items-center gap-1 transition-transform duration-300 hover:scale-115 hover:text-white"
              >
                <span>🛒</span>
                <span className="text-md font-semibold">
                  {cartitems.length}
                </span>
              </Link>
            </li>

          </ul>
        </div>

      </div>
    </>
  );
};

export default Header;
