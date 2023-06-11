import React from "react";
import { Link } from "react-router-dom";
import raqueta_yonex_ezone from "../../raqueta_yonex_ezone.jpg"; 
import Header from "../../components/Header/Header";
const Home = () => {
  return (
    <>
      <Header />
      <div className="home">
        <h1 className="home__title">TENNIS SHOP</h1>

        <Link to="/shop" className="home__cta">
          SHOP NOW
        </Link>

        <img src={raqueta_yonex_ezone} alt="raqueta yonex ezone" className="home__image" />
      </div>
    </>
  );
};

export default Home;