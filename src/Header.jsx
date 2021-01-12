import React from "react";

const Header = () => {
  return (
    <header id="pageHeader">
      <div className="about__hedear">
        <img
          id="logo"
          src="https://habrastorage.org/webt/ea/um/iz/eaumizxl6ubhc6dicj2gulvky30.png"
          alt="pic"
        />
        <input id="searchBar" placeholder=" &#128269;   Search..." />
        <button id="btn_log_in">Log in</button>
      </div>
    </header>
  );
};

export default Header;
