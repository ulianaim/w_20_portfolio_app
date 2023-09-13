import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to = "/">About me</Link>
      <Link to = "/Portfolio">Portfolio</Link>
      <Link to = "/Contact-Me">Contact me</Link>
    </nav>
  );
}

export default Navbar;
