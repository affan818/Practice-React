import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    
      <div>
      <nav>
        <img src="" alt="logo" />
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact </Link>
        </li>
      </ul>
    </nav>
    </div>
  );
};

export default Nav;
