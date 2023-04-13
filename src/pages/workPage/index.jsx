import "./style.scss";
import React from "react";

// component
import Card from "../../components/card/Card";

// api
import { workList } from "../../api/workList";

export const WorkPage = () => {
  return (
    <main>
      <div className="card-container">
        {workList.map((card, i) => {
          return <Card key={i} image={card["image"]} title={card["title"]} badge={card["badge"]} urlLink={card["link"]}></Card>;
        })}
      </div>
    </main>
  );
};
