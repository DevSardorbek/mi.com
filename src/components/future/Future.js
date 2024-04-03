import React from "react";
import "./Future.css";
import futureimg1 from "../../assets/images/futurebg1.webp";
import futureimg2 from "../../assets/images/futurebg2.webp";
import futureimg3 from "../../assets/images/futurebg3.webp";

function Future() {
  return (
    <div className="future">
      <div className="future__title">
        <div></div>
        <div className="title__name">
          <h2>Explore Xiaomi</h2>
        </div>
        <div className="title__arrow">
          <div className="arr__left">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              viewBox="0 0 48 48"
            >
              <path
                fill="none"
                stroke="#fff"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="4"
                d="M31 36L19 24L31 12"
              />
            </svg>
          </div>
          <div className="arr__right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              viewBox="0 0 48 48"
            >
              <path
                fill="none"
                stroke="#fff"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="4"
                d="M19 12L31 24L19 36"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="future__cards">
        <div className="future__card">
          <div className="future__card-img">
            <img className="future_img" src={futureimg1} alt="" />
          </div>
          <div className="future__card-info">
            <h3 className="future__title">A fully customizable companion</h3>
            <p className="future__desc">
              What's your expartation from a cyber pet
            </p>
            <button className="future_btn"> learn more</button>
          </div>
        </div>
        <div className="future__card">
          <div className="future__card-img">
            <img className="future_img" src={futureimg2} alt="" />
          </div>
          <div className="future__card-info">
            <h3 className="future__title">Smarter every wear</h3>
            <p className="future__desc">
              Access over 200 apps, keep track of your fitness, make payments,
              and more, all from your wrist.
            </p>
            <button className="future_btn"> learn more</button>
          </div>
        </div>
        <div className="future__card">
          <div className="future__card-img">
            <img className="future_img" src={futureimg3} alt="" />
          </div>
          <div className="future__card-info">
            <h3 className="future__title">A fully customizable companion</h3>
            <p className="future__desc">
              What's your expartation from a cyber pet
            </p>
            <button className="future_btn"> learn more</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Future;
