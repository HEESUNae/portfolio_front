import "./style.scss";
import React, { useRef } from "react";

export const LayerModal = ({ title, content, isModalFn, isModal }) => {
  const ref = useRef();
  console.log();

  const onLayerFn = (e) => {
    if (e.target === ref.current) {
      isModalFn();
    }
  };

  return (
    <div className={`modal-layer ${isModal ? "active" : ""}`} ref={ref} onClick={onLayerFn}>
      <div className="modal">
        <div className="modal-head">
          <p className="title">{title}</p>
        </div>
        <div className="modal-body">
          {content}
          <div className="modal-close">
            <button onClick={isModalFn}>닫기</button>
          </div>
        </div>
      </div>
    </div>
  );
};
