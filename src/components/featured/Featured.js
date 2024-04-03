import React from "react";
import "./Featured.css";
import fimg1 from "../../assets/images/featuredimg1.webp";
import note13 from "../../assets/images/note13.svg";
import cardimg1 from "../../assets/images/cardimg1.webp";
import cardimg2 from "../../assets/images/cardimg2.webp";
import cardimg3 from "../../assets/images/cardimg3.webp";
import cardimg4 from "../../assets/images/cardimg4.webp";

function Featured() {
  return (
    <div className="featured">
      <h2 className="featured__title">Featured Prodacts</h2>
      <div className="featured__links-wrapper">
        <ul className="featured__links">
          <li className="featured__item">
            <a className="f_item" href="#">
              Stay on Trend
            </a>
            <span className="line"></span>
          </li>
          <li className="featured__item">
            <a className="f_item" href="#">
              Latest Flagshop
            </a>
            <span className="line"></span>
          </li>
          <li className="featured__item">
            <a className="f_item" href="#">
              Enjoy the Outdoors
            </a>
            <span className="line"></span>
          </li>
          <li className="featured__item">
            <a className="f_item" href="#">
              Gaming Essentials{" "}
            </a>
            <span className="line"></span>
          </li>
        </ul>
      </div>
      <div className="featured__prodacts">
        <div className="container">
          <div className="featured__prodact">
            <div className="featured__main">
              <div className="featured__main-img">
                <img className="f_img" src={fimg1} alt="" />
              </div>
              <div className="featured__main-info">
                <img src={note13} alt="" />
                <h3 className="f_title">Xiomi Fan Festeval Special Edition</h3>
                <p>Limited availabilitiy | Mystic Silver</p>
                <button className="f_more">Learn more</button>
              </div>
            </div>
            <div className="featured__cards">
              <div className="featured__card">
                <div className="featured__card-img">
                  <img className="card__img" src={cardimg1} alt="" />
                </div>
                <div className="featured__card-info">
                  <h3 className="card__title">Readmi Note 13 5G</h3>
                  <p className="card__desc">Super Clear 108px triple camera</p>
                  <button className="btn_card">learn more</button>
                </div>
              </div>
              <div className="featured__card">
                <div className="featured__card-img">
                  <img className="card__img" src={cardimg2} alt="" />
                </div>
                <div className="featured__card-info">
                  <h3 className="card__title">Redmi Watch 4</h3>
                  <p className="card__desc">Ultra-large 1.97" AMOLED display</p>
                  <button className="btn_card">learn more</button>
                </div>
              </div>
              <div className="featured__card">
                <div className="featured__card-img">
                  <img className="card__img" src={cardimg3} alt="" />
                </div>
                <div className="featured__card-info">
                  <h3 className="card__title">Redmi Buds 5 Pro</h3>
                  <p className="card__desc">
                    High resalution,Hi-Fi sound quality
                  </p>
                  <button className="btn_card">learn more</button>
                </div>
              </div>
              <div className="featured__card">
                <div className="featured__card-img">
                  <img className="card__img" src={cardimg4} alt="" />
                </div>
                <div className="featured__card-info">
                  <h3 className="card__title">Redmi Buds 5</h3>
                  <p className="card__desc">Al noise reducation for calls</p>
                  <button className="btn_card">learn more</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
