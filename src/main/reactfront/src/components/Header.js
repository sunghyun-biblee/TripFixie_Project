import { Link } from "react-router-dom";
import "../css/header.css";
import img from "../img/fairy2.svg";

function Header() {
  return (
    <div className="header_container">
      <div className="header_items">
        <img src={img} alt="" className="icon" />
      </div>
      <div className="header_items">
        <Link to="/info" className="Link ">
          이용방법
        </Link>
      </div>
    </div>
  );
}

export default Header;
