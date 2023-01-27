import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    
    <div className="social-container">
      <h3>Follow Us on Social Media</h3>
      <a href="https://www.youtube.com"
        className="youtube social">
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
      <a href="https://web.facebook.com/chicorosefarm"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://www.twitter.com" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="https://www.instagram.com/chicorosefarms/?hl=en"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <br/>
      <br/>
      <h4>Copyright &#169; 2022 - 2024 Chicorosefarm Nig. Ltd <br/> All rights reserved</h4>
      <h6>Created by Angel Amayo<br/>&#64;Citybiz Tech </h6>
</div>
  );
}
