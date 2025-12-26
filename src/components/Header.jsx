import { useSelector } from "react-redux";
import { LOGO_URL } from "../utils/constants";
import {Link} from "react-router-dom"



const Header = () => {
  const cartitems = useSelector((store)=>store.cart.items);
  // console.log(cartitems);
  return (
    <>
      <div className=" flex flex-col md:flex-row justify-between bg-amber-400 items-center px-4 py-2 sticky top-0 z-50">
        <div className="logo flex items-center gap-2 my-3 md:my-0">
          <img src={LOGO_URL} alt="logo-image" className="w-12 md:w-14 rounded-full mr-3"/>
        <h1 className="text-xl md:text-3xl font-semibold text-center md:text-left">Good Food, Good mood!</h1>
        </div>
        <div className="nav-bar ">
          <ul className="flex gap-6 text-lg md:text-xl font-semibold items-center my-3 md:my-0">
            <li className=" transition-transform duration-300 hover:scale-115 hover:text-white"><Link to={"/"}>Home</Link></li>
            <li className=" transition-transform duration-300 hover:scale-115 hover:text-white"><Link to={"/about"}>About</Link></li>
            <li className=" transition-transform duration-300 hover:scale-115 hover:text-white"><Link to={"/cart"}>
             Cart ({cartitems.length})</Link></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Header;