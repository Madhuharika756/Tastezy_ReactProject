import { LOGO_URL } from "../utils/constants";
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <>
      <div className="flex justify-between bg-amber-400 items-center">
        <div className="logo">
          <img src={LOGO_URL} alt="logo-image" className="w-18 rounded-full" />
        </div>
        <div className="nav-bar ">
          <ul className="flex text-lg font-semibold">
            <li className="mr-4"><Link to={"/"}>Home</Link></li>
            <li className="mr-4"><Link to={"/about"}>About</Link></li>
            <li className="mr-4"><Link to={"/contact"}>Contact Us</Link></li>
            <li className="mr-4"><Link>Cart</Link></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Header;