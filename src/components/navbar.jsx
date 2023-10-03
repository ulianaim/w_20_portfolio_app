import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to = "/w_20_portfolio_app">About me</Link>
      <Link to = "/w_20_portfolio_app/portfolio">Portfolio</Link>
      <Link to = "/w_20_portfolio_app/Contact-Me">Contact me</Link>
      <Link to = "/w_20_portfolio_app/Resume">Resume</Link>
    </nav>
  );
}

export default Navbar;
