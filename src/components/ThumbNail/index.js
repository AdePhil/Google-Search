/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./thumbnail.scss";
const ThumbNail = () => {
  return (
    <div className="thumbnail">
      <p>
        www.youtube.com › watch <span>&#9660;</span>
      </p>
      <a href="#" className="thumbnail__link">
        Adele - Hello (Live at the NRJ Awards) - YouTube
      </a>
      <div className="thumbnail__details">
        <img src="./shakes-1.jpg" alt="Shakes" />
        <div>
          <p>Nov 9, 2015 - Uploaded by Adele</p>
          <p>
            VEVO ‘Hello' is taken from the new album, 25, out November 20. ...
            50+ videos Play all Mix - Adele - Hello (Live at ...
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThumbNail;
