import React from "react";

export default function Element1() {
  return (
    <div class="slideshow">
      <div className="slideshow-slide1">
        <h5 className="slideshow-header">
          Lås uppljudböcker med motion och håll
          <br />
          träningsmotivationen igång
        </h5>
        <div className="boxes" id="slide1-box1"></div>
        <div className="boxes" id="slide1-box2"></div>
        <div className="boxes" id="slide1-box3"></div>
        <div className="runner">
          <img src="./img/Slideshow-slide1-runner.svg" alt="runner" />
        </div>
      </div>
    </div>
  );
}
