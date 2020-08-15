import React from "react";
import "../styles/Spinner.scss";

export default () => (
  <div className="spinner">
    <img
      className="spinner-img"
      alt="Loading..."
      src="https://123emoji.com/wp-content/uploads/2016/04/200-46.gif"
    />
    <span className="spinner-text">Loading...</span>
  </div>
);
