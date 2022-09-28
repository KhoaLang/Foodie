import "./header.css";
import logo from "../../assets/Bella Olonje logo 111 1.svg";
import burger from "../../assets/burger.svg";

const navbarItems = ["Home", "Product", "Faq", "Contact"];

const Header = () => {
  return (
    <header className="header d-flex justify-content-between align-items-center">
      <img className="logo" src={logo} alt="foodie" />
      <img className="burger" src={burger} alt="burger" />
      <nav className="justify-content-between align-items-center">
        {navbarItems.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </nav>
    </header>
  );
};

export default Header;
