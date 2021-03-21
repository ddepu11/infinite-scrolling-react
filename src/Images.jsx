import React from "react";

export default function Images() {
  return (
    <div className="img">
      <img
        src="https://source.unsplash.com/random/"
        // src={`https://source.unsplash.com/random/30${Math.floor(
        //   Math.random() * 5
        // )}*30${Math.floor(Math.random() * 5)}`}
        alt="s"
      />
      <div className="info">
        <img src="https://i.pravatar.cc/150?img=3" alt="s" />
        <span>12-2-2021</span>
        <p>Likes: 125</p>
      </div>
    </div>
  );
}
