import "./style.scss";
import React from "react";

import { Nav } from "../nav/Nav";

export const Header = () => {
  return (
    <header>
      <div className="profile">
        <img src={require("../../assets/hs.png")} alt="" />
      </div>
      <div className="info-container">
        <p className="name">황희선</p>
        <p className="job">프론트엔드 개발자</p>
      </div>

      <Nav />
    </header>
  );
};
