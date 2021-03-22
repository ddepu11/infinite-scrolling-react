import React from "react";

export default function Images({ likes, image, userImg, updatedAt }) {
  return (
    <div className="img">
      <img
        src={image}
        // src={`https://source.unsplash.com/random/30${Math.floor(
        //   Math.random() * 5
        // )}*30${Math.floor(Math.random() * 5)}`}
        alt="s"
      />
      <div className="info">
        <img src={userImg} alt="s" />
        <span>{updatedAt}</span>
        <p>Likes: {likes}</p>
      </div>
    </div>
  );
}
