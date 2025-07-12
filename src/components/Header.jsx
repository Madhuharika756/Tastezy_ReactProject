import { useSelector } from "react-redux";
import { LOGO_URL } from "../utils/constants";
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Header = () => {
  const cartitems = useSelector((store)=>store.cart.items);
  // console.log(cartitems);
  return (
    <>
      <div className="flex justify-between bg-amber-400 items-center">
        <div className="logo">
          <img src={LOGO_URL} alt="logo-image" className="w-18 rounded-full" />
        </div>
        <div className="nav-bar ">
          <ul className="flex text-xl font-semibold">
            <li className="mr-4 transition-transform duration-300 hover:scale-115 hover:text-white"><Link to={"/"}>Home</Link></li>
            <li className="mr-4 transition-transform duration-300 hover:scale-115 hover:text-white"><Link to={"/about"}>About</Link></li>
            <li className="mr-4 transition-transform duration-300 hover:scale-115 hover:text-white"><Link to={"/contact"}>Contact Us</Link></li>
            <li className="mr-4 transition-transform duration-300 hover:scale-115 hover:text-white"><Link to={"/cart"}>
             Cart ({cartitems.length})</Link></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Header;