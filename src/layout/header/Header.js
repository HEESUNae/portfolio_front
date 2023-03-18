import "./Header.css";
import React from "react";

const Header = () => {
  return (
    <header>
      <div className="profile">
        <img src={`/image/hs.png`} alt="" />
      </div>
      <div className="info-container">
        <p className="name">황희선</p>
        <p className="job">프론트엔드 개발자</p>
      </div>

      <div className="skill-container">
        <div className="skill">HTML</div>
        <div className="skill">CSS</div>
        <div className="skill">SCSS</div>
        <div className="skill">JAVASCRIPT</div>
        <div className="skill">TYPESCRIPT</div>
        <div className="skill">REACT</div>
        <div className="skill">NEXTJS</div>
        <div className="skill">VUE</div>
      </div>
    </header>
  );
};

export default Header;
