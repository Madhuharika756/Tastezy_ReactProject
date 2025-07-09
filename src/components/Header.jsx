import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <>
      <div className="headerComponent">
        <div className="logo">
          <img src={LOGO_URL} alt="logo-image" className="logo" />
        </div>
        <div className="nav-bar">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Header;