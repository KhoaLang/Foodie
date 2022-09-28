import { useState } from "react";
import Button from "../layouts/Button";
import "./body.css";
import LPhone from "../../assets/Rectangle.svg";
import LPhoneDesk from "../../assets/Rectangle (5).svg";
import RPhone from "../../assets/Rectangle (1).svg";
import CreateAccount from "../../assets/Rectangle (2).svg";
import Explore from "../../assets/Rectangle (3).svg";
import { ReactComponent as ExploreDesk } from "../../assets/Rectangle (7).svg";
import Checkout from "../../assets/Rectangle (4).svg";
import { ReactComponent as CheckoutDesk } from "../../assets/Rectangle (8).svg";
import CreateAccountDesk from "../../assets/Rectangle (6).svg";
import { useEffect } from "react";

const getWindowDimension = () => {
  const { innerHeight, innerWidth } = window;
  return { innerHeight, innerWidth };
};

const Body = () => {
  const [windowDim, setWindowDim] = useState(getWindowDimension());
  useEffect(() => {
    function handleWindowResize() {
      setWindowDim(getWindowDimension());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    <section className="body">
      <section className="hero d-flex justify-content-center align-items-center flex-column">
        <header className="header d-flex justify-content-center align-items-center flex-column">
          <h5>Food app</h5>
          <p>Why stay hungry when you can order form Bella Onojie</p>
          <h4>Download the bella onoje’s food app now on</h4>
        </header>
        <div className="button-group d-flex justify-content-center align-items-center flex-column">
          <Button
            textColor="#fff"
            bgColor="#FA4A0C"
            border="none"
            borderRad="30px"
            pd="16px 0"
          >
            Playstore
          </Button>
          <Button
            textColor="#FA4A0C"
            bgColor="transparent"
            border="1px solid #FA4A0C"
            borderRad="30px"
            pd="16px 0"
          >
            App store
          </Button>
        </div>
      </section>
      <section className="phone-image">
        <img className="l-phone-desk" src={LPhoneDesk} alt="" />
        <img className="l-phone" src={LPhone} alt="" />
        <img className="r-phone" src={RPhone} alt="" />
        <div
          className="hr"
          style={{
            border: "1px solid #E4E4E4",
            height: "0px",
            background: "#E4E4E4",
            padding: "0",
          }}
        ></div>
        <p>How the app works</p>
      </section>
      <div
        className="hr"
        style={{
          border: "1px solid #E4E4E4",
          height: "0px",
          background: "#E4E4E4",
        }}
      ></div>
      <section className="create-account d-flex flex-column justify-content-center">
        <header>
          <h3>Create an account</h3>
          <h2>Create/login to an existing account to get started</h2>
          <h4>An account is created with your email and a desired password</h4>
        </header>
        <img className="create-acc-desk" src={CreateAccountDesk} alt="" />
        <img className="create-acc" src={CreateAccount} alt="" />
      </section>
      <section className="explore d-flex justify-content-center flex-column">
        <header>
          <h3>Explore while shopping</h3>
          <h3>Explore varieties</h3>
          <h2>Shop for your favorites meal as e dey hot.</h2>
          <h4>
            Shop for your favorite meals or drinks and enjoy while doing it.
          </h4>
        </header>
        <img className="explore-img" src={Explore} alt="" />
        <ExploreDesk />
        {/* <img className="explore-desk" src={ExploreDesk} alt="" /> */}
      </section>
      <section className="checkout d-flex justify-content-center flex-column">
        <header>
          <h3>Checkout</h3>
          <h2>When you done check out and get it delivered.</h2>
          <h4>When you done check out and get it delivered with ease.</h4>
        </header>
        <img src={Checkout} alt="" />
        <CheckoutDesk />
      </section>
      <section className="download d-flex justify-content-center align-items-center flex-column">
        <header>
          <h2>Download the app now.</h2>
          {windowDim.innerWidth >= 1200 ? (
            <h4>
              Available on your favorite store. Start your premium experience
              now
            </h4>
          ) : (
            <h4>Most calendars are designed for teams.</h4>
          )}
        </header>
        <div className="button-group d-flex justify-content-between">
          <Button
            textColor="#FFF"
            bgColor="#FA4A0C"
            border="1px solid #FA4A0C"
            borderRad="10px"
            pd="18px 31px"
            txtSize="16px"
            lineHeight="28px"
          >
            {windowDim.innerWidth >= 1200 ? (
              <p style={{ margin: "0" }}>Playstore</p>
            ) : (
              <p style={{ margin: "0" }}>Buy now</p>
            )}
          </Button>
          <Button
            txtSize="16px"
            lineHeight="28px"
            textColor="#FFF"
            bgColor="transparent"
            border="1px solid #FFF"
            borderRad="10px"
            pd="16px 45px"
          >
            {windowDim.innerWidth >= 1200 ? (
              <p style={{ margin: "0" }}>Appstore</p>
            ) : (
              <p style={{ margin: "0" }}>Try for free</p>
            )}
          </Button>
          {/* <button>Download</button> */}
        </div>
      </section>
    </section>
  );
};

export default Body;
