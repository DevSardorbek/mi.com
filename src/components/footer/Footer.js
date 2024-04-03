import React from "react";
import "./Footer.css";
import facebook from "../../assets/images/facebook.png";
import youtube from "../../assets/images/youtube.png";
import X from "../../assets/images/X.png";
import instagram from "../../assets/images/insta.png";
import mi from "../../assets/images/mi.png";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__support">
            <h3>Support</h3>
            <a className="footer__link" href="#">
              Contact us{" "}
            </a>
            <a className="footer__link" href="#">
              User Guide{" "}
            </a>
            <a className="footer__link" href="#">
              Warranty{" "}
            </a>
            <a className="footer__link" href="#">
              International Warranty{" "}
            </a>
            <a className="footer__link" href="#">
              EU Declaration of Conformity{" "}
            </a>
            <a className="footer__link" href="#">
              Scooter Safety Notice{" "}
            </a>
            <a className="footer__link" href="#">
              Android Enterprise Recommended{" "}
            </a>
            <a className="footer__link" href="#">
              Digital Services Act{" "}
            </a>
          </div>
          <div className="footer__about">
            <h3>ABOUT US</h3>
            <a className="footer__link" href="#">
              Xiaomi
            </a>
            <a className="footer__link" href="#">
              Leadership Team
            </a>
            <a className="footer__link" href="#">
              Leadership Team
            </a>
            <a className="footer__link" href="#">
              Integrity & Compliance
            </a>
            <a className="footer__link" href="#">
              Investor Relations
            </a>
            <a className="footer__link" href="#">
              Sustainability
            </a>
            <a className="footer__link" href="#">
              Trust Center
            </a>
            <a className="footer__link" href="#">
              Xiaomi Accessibility
            </a>
            <a className="footer__link" href="#">
              Xiaomi HyperOS
            </a>
          </div>
          <div className="footer__project">
            <h3>XIAOMI PROJECTS</h3>
            <a className="footer__link" href="#">
              Xiaomi Creators
            </a>
            <a className="footer__link" href="#">
              Xiaomi Studios
            </a>
            <a className="footer__link" href="#">
              Xiaomi Imagery
            </a>
            <a className="footer__link" href="#">
              Xiaomi Master Class
            </a>
            <a className="footer__link" href="#">
              Xiaomi Renovation
            </a>
          </div>
          <div className="footer__follow">
            <h4>Follow Xiaomi</h4>
            <div className="f_media">
              <img className="media_img" src={facebook} alt="" />
              <img className="media_img" src={youtube} alt="" />
              <img className="media_img" src={X} alt="" />
              <img className="media_img" src={instagram} alt="" />
              <img className="media_img" src={mi} alt="" />
            </div>
            <h4>Let's stay in touch</h4>
            <div className="f__input">
              <input
                className="input"
                placeholder="Enter email adress"
                type="email"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 20 20"
              >
                <path
                  fill="#fff"
                  fill-rule="evenodd"
                  d="m7.053 2.158l7.243 7.256a.66.66 0 0 1 .204.483a.705.705 0 0 1-.204.497c-2.62 2.556-5.145 5.023-7.575 7.401c-.125.117-.625.408-1.011-.024c-.386-.433-.152-.81 0-.966l7.068-6.908l-6.747-6.759c-.246-.339-.226-.652.06-.939c.286-.287.607-.3.962-.04"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
