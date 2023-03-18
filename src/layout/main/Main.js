import "./Main.css";
import React from "react";
import Card from "../../component/card/Card.js";

const Contents = () => {
  const cardArray = [
    {
      image: "/image/disney-img.jpg",
      title: "DISNEY PLUS",
      badge: ["HTML", "CSS", "REACT", "JAVASCRIPT"],
    },
    {
      image: "/image/tictactoe-img.jpg",
      title: "TIC TAC TOE",
      badge: ["HTML", "CSS", "REACT", "JAVASCRIPT"],
    },
    {
      image: "/image/maple-img.jpg",
      title: "MAPLE STORY",
      badge: ["HTML", "CSS", "NEXTJS", "TYPESCRIPT"],
    },
    {
      image: "/image/ipad-img.jpg",
      title: "APPLE IPAD",
      badge: ["HTML", "CSS", "JAVASCRIPT"],
    },
    {
      image: "/image/starbucks-img.jpg",
      title: "STARBUCKS",
      badge: ["HTML", "CSS", "JAVASCRIPT"],
    },
    {
      image: "/image/disney-img.jpg",
      title: "REACT SHOP",
      badge: ["HTML", "CSS", "REACT", "JAVASCRIPT"],
    },
    {
      image: "/image/disney-img.jpg",
      title: "NEXTJS BLOG",
      badge: ["HTML", "CSS", "NEXTJS", "TYPESCRIPT"],
    },
  ];
  return (
    <main>
      <div className="card-container">
        <Card image={cardArray[0]["image"]} title={cardArray[0]["title"]} badge={cardArray[0]["badge"]}></Card>
        <Card image={cardArray[1]["image"]} title={cardArray[1]["title"]} badge={cardArray[1]["badge"]}></Card>
        <Card image={cardArray[2]["image"]} title={cardArray[2]["title"]} badge={cardArray[2]["badge"]}></Card>
        <Card image={cardArray[3]["image"]} title={cardArray[3]["title"]} badge={cardArray[3]["badge"]}></Card>
        <Card image={cardArray[4]["image"]} title={cardArray[4]["title"]} badge={cardArray[4]["badge"]}></Card>
        <Card image={cardArray[5]["image"]} title={cardArray[5]["title"]} badge={cardArray[5]["badge"]}></Card>
        <Card image={cardArray[6]["image"]} title={cardArray[6]["title"]} badge={cardArray[6]["badge"]}></Card>
        <Card image={cardArray[6]["image"]} title={cardArray[6]["title"]} badge={cardArray[6]["badge"]}></Card>
      </div>
    </main>
  );
};

export default Contents;
