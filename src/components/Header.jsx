import { LOGO_URL } from "../utils/constants";
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <>
      <div className="headerComponent">
        <div className="logo">
          <img src={LOGO_URL} alt="logo-image" className="logo" />
        </div>
        <div className="nav-bar">
          <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/about"}>About</Link></li>
            <li><Link to={"/contact"}>Contact Us</Link></li>
            <li><Link>Cart</Link></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Header;