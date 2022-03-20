import React from "react";
import { BsStarFill, BsStar, BsStarHalf } from "react-icons/bs";
const Stars = ({ stars, reviews }) => {
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <BsStarFill className="star" />
        ) : stars >= index + 0.5 ? (
          <BsStarHalf className="star" />
        ) : (
          <BsStar className="star" />
        )}
      </span>
    );
  });
  return (
    <article className="reviews-container">
      <span>{tempStars}</span>
      <p>(of {reviews} reviews)</p>
    </article>
  );
};

export default Stars;
