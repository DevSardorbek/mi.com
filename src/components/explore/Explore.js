import React from "react";
import "./Explore.css";
import heroImg from "../../assets/images/hero_img.webp";

function Explore() {
  return (
    <div className="hero__section">
      <div className="hero__section-info">
        <h1 className="hero_title">Redmi 12C</h1>
        <p className="hero_desc">Media Tek Helio G85 | Immersivniy Display 6.71</p>
        <div className="price">
          <h1 className="new_price">6990 rub</h1>
          <del className="old_price">9990 rub</del>
        </div>
        <div className="buy_hero">
          <button className="btn_buy">Buy</button>
          <button className="btn_more">
            <span> Learn more</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 48 48"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="4"
                d="m19 12l12 12l-12 12"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="hero__section-img">
        <img className="hero_img" src={heroImg} alt="" />
      </div>
    </div>
  );
}

export default Explore;
