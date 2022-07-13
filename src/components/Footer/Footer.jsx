import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "../../img/instagram.png";
import Facebook from "../../img/Facebook.png";
import Github from "../../img/github.png";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>Zainkeepscode@gmail.com</span>
        <div className="f-icons">
          <Insta color="white" size={"3rem"} />
          <Facebook color="white" size={"3rem"} />
          <Github color="white" size={"3rem"} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
