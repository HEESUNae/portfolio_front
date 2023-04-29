import "./style.scss";
import React from "react";

import { Link, useLocation } from "react-router-dom";

export const Nav = () => {
  const location = useLocation().pathname;

  return (
    <div className="nav">
      <ul>
        <li className={location === "/" ? "active" : ""}>
          <Link to="/">
            <p>나의 소개</p>
          </Link>
        </li>
        <li className={location === "/work" ? "active" : ""}>
          <Link to="/work">
            <p>개인 작업물</p>
          </Link>
        </li>
        {/* <li className={location === "/skill" ? "active" : ""}>
          <Link to="/skill">
            <p>사용 가능한 스킬</p>
          </Link>
        </li> */}
      </ul>
    </div>
  );
};
