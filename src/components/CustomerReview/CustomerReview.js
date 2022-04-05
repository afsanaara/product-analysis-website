import React from "react";
import useReview from "../../Hooks/useReview";
import DisplayReview from "../DisplayReview/DisplayReview";

const CustomerReview = () => {
  const [reviews, setReviews] = useReview();
  const customerReview = reviews.slice(0, 3);

  return (
    <div className="customer-review-container">
      <h1>Customer Review (3)</h1>
      <div className="review-container">
        {customerReview.map((review) => (
          <DisplayReview key={review.id} review={review}></DisplayReview>
        ))}
      </div>
    </div>
  );
};

export default CustomerReview;
