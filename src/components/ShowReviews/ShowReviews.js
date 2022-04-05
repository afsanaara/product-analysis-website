import React from "react";
import "./ShowReviews.css";
const ShowReviews = (props) => {
  const { name, body, rating, picture } = props.review;
  return (
    <div className="review-text">
      <img
        style={{ width: "250px", height: "150px", borderRadius: "10px" }}
        src={picture}
        alt=""
      />
      <h1>{name}</h1>
      <p>{body}</p>
      <p>
        <small>Rating:{rating}</small>
      </p>
    </div>
  );
};

export default ShowReviews;
