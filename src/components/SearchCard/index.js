/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./searchcard.scss";
const SearchCard = () => {
  return (
    <div className="search-card">
      <p>
        en.wikipedia.org › wiki › Hello_(Adele_song) <span>&#9660;</span>
      </p>
      <a href="#" className="search-card__link">
        Hello (Adele song) - Wikipedia
      </a>
      <p>
        Wikipedia "Hello" is a song by British singer-songwriter Adele, released
        on 23 October 2015 by XL Recordings as the lead single from her third
        studio album, 25 (2015). ‎Writing and composition · ‎Chart performance ·
        ‎Accolades · ‎Music video
      </p>
      <div className="search-card__tags">
        <a href="#">‎Writing and composition </a>
        <a href="#">‎Chart performance</a>
        <a href="#">‎Accolades</a>
        <a href="#">‎Music video</a>
      </div>
    </div>
  );
};

export default SearchCard;
