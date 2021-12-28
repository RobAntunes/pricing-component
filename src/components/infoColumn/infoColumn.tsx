import React from 'react';

import "./styles.css"

import robotImg from "../../assets/Untitled-2 1.svg";

const InfoColumn = () => {
  return (
    <div className="column column1">
      <h2 className="column1__header">
        <span className="column1__header--pt1">Save your</span>
        <span className="column1__header--pt2">
          <b>money now.</b>
        </span>
      </h2>
      <div className="column__content column1__content">
        <p>
          Manage your company bot in a few easy steps, join our Pro plan to get
          a taste for the full experience.
        </p>
        <br />
        <p>
          Start your 14-day free trial of Pro plan, you can always upgrade it or
          remain on the free Lite plan.
        </p>
        <img
          width="300"
          src={robotImg}
          alt="A 3d cartoon robot coming out of a mobile telephone with colourful chat bubbles surrounding it"
          className="robot-img"
        />
      </div>
    </div>
  );
}
export default InfoColumn;