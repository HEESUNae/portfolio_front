import "./style.scss";
import React from "react";

import { StyledBadge } from "./StyledBadge";

const Card = ({ image, title, badge, urlLink }) => {
  return (
    <div className="card">
      <a href={urlLink}>
        <div className="card-img">
          <img src={image} alt="" />
        </div>
        <div className="card-content">
          <p className="title">{title}</p>
          <div className="badge-wrap">
            {badge.map((el, index) => {
              return (
                <StyledBadge key={index} badge={el}>
                  {el}
                </StyledBadge>
              );
            })}
          </div>
        </div>
      </a>
    </div>
  );
};

export default Card;
