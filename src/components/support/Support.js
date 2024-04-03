import React from "react";
import "./Support.css";

function Support() {
  return (
    <div className="support">
      <div className="container">
        <div className="support__title">
          <h1>Xiaomi Support</h1>
        </div>
        <div className="support__wrapper">
          <div className="support__item">
            <svg
              className="support__img"
              xmlns="http://www.w3.org/2000/svg"
              width="80px"
              height="80px"
              viewBox="0 0 24 24"
            >
              <path d="M22 17.002a6.002 6.002 0 0 1-4.713 5.86l-.638-1.914A4.003 4.003 0 0 0 19.465 19H17a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.938a8.001 8.001 0 0 0-15.876 0H7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5C2 6.477 6.477 2 12 2s10 4.477 10 10v5zM20 17v-4h-3v4zM4 13v4h3v-4z" />
            </svg>
            <h3 className="support_title">Customer Support</h3>
            <p className="support_desc">
              Contact us via live-chat, email, and phone call
            </p>
          </div>
          <div className="support__item">
            <svg
              className="support__img"
              xmlns="http://www.w3.org/2000/svg"
              width="80px"
              height="80px"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              >
                <path d="m8.5 11.5l3 3l5-5" />
                <path d="M5 18L3.13 4.913a.996.996 0 0 1 .774-1.114l7.662-1.703a2 2 0 0 1 .868 0L20.096 3.8c.51.113.848.596.774 1.114L19 18c-.07.495-.5 3.5-7 3.5S5.07 18.495 5 18" />
              </g>
            </svg>
            <h3 className="support_title">Warrantly</h3>
            <p className="support_desc">
              Local warranty policy protection is provided
            </p>
          </div>
          <div className="support__item">
            <svg
              className="support__img"
              xmlns="http://www.w3.org/2000/svg"
              width="48px"
              height="48px"
              viewBox="0 0 24 24"
            >
              <g>
                <path d="M10 12a1 1 0 1 0 0 2h4a1 1 0 0 0 0-2z" />
                <path
                  fill-rule="evenodd"
                  d="M4 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3zm16 2H4a1 1 0 0 0-1 1v3h18V5a1 1 0 0 0-1-1M3 19v-9h18v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1"
                  clip-rule="evenodd"
                />
              </g>
            </svg>
            <h3 className="support_title">User Guides</h3>
            <p className="support_desc">
              Find and download your Xiaomi product user guide
            </p>
          </div>
          <div className="support__item">
            <svg
              className="support__img"
              xmlns="http://www.w3.org/2000/svg"
              width="48px"
              height="48px"
              viewBox="0 0 26 26"
            >
              <path d="M13 0c-1.7 0-3 1.3-3 3v6c0 1.7 1.3 3 3 3h6l4 4v-4c1.7 0 3-1.3 3-3V3c0-1.7-1.3-3-3-3zm4.188 3h1.718l1.688 6h-1.5l-.407-1.5h-1.5L16.813 9H15.5zM18 4c-.1.4-.212.888-.313 1.188l-.28 1.312h1.187l-.282-1.313C18.113 4.888 18 4.4 18 4M3 10c-1.7 0-3 1.3-3 3v6c0 1.7 1.3 3 3 3v4l4-4h6c1.7 0 3-1.3 3-3v-6h-3c-1.9 0-3.406-1.3-3.906-3zm4.594 2.906c1.7 0 2.5 1.4 2.5 3c0 1.4-.481 2.288-1.281 2.688c.4.2.874.306 1.374.406l-.374 1c-.7-.2-1.426-.512-2.126-.813c-.1-.1-.275-.093-.375-.093C6.112 18.994 5 18 5 16c0-1.7.994-3.094 2.594-3.094m0 1.094c-.8 0-1.188.9-1.188 2c0 1.2.388 2 1.188 2c.8 0 1.218-.9 1.218-2s-.418-2-1.218-2" />
            </svg>
            <h3 className="support_title">FAQ</h3>
            <p className="support_desc">Search for help about Xiaomi</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Support;
