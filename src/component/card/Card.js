import React from "react";
import styled from "styled-components";

const Card = ({ image, title, badge }) => {
  const Badge = styled.div`
    color: #fff;
    border-radius: 0.5rem;
    padding: 0.3rem 1rem;
    font-size: 1rem;
    display: inline-block;
    line-height: 1.2;
    font-weight: 600;
    background: ${(props) => {
      if (props.badge === "HTML") {
        return "chocolate";
      }
      if (props.badge === "CSS") {
        return "darkblue";
      }
      if (props.badge === "REACT") {
        return "crimson";
      }
      if (props.badge === "JAVASCRIPT") {
        return "brown";
      }
      if (props.badge === "NEXTJS") {
        return "blueviolet";
      }
      if (props.badge === "TYPESCRIPT") {
        return "darkcyan";
      }
    }};
  `;

  return (
    <div className="card">
      <div className="card-img">
        <img src={image} alt="" />
      </div>
      <div className="card-content">
        <p className="title">{title}</p>
        <div className="badge-wrap">
          <Badge badge={badge[0]}>{badge[0]}</Badge>
          <Badge badge={badge[1]}>{badge[1]}</Badge>
          <Badge badge={badge[2]}>{badge[2]}</Badge>
          <Badge badge={badge[3]}>{badge[3]}</Badge>
        </div>
      </div>
    </div>
  );
};

export default Card;
