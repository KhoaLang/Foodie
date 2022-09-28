import "./footer.css";
import Twitter from "../../assets/Vector.svg";
import Facebook from "../../assets/Vector (1).svg";
import Linkedin from "../../assets/Vector (2).svg";
import Logo from "../../assets/Bella Olonje logo 111 1.svg";

const Footer = () => {
  return (
    <footer className="footer d-flex align-items-center">
      <img src={Logo} alt="" />
      <ul className="d-flex justify-content-between align-items-center">
        <li>
          <img src={Twitter} />
        </li>
        <li>
          <img src={Facebook} />
        </li>
        <li>
          <img src={Linkedin} />
        </li>
      </ul>
      <p className="type">Just type what's on your mind and we'll</p>
      <p className="copyright">Copywright 2020 Bella Onojie.com</p>
    </footer>
  );
};

export default Footer;
