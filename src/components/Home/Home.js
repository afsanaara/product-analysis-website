import React from "react";
import useReview from "../../Hooks/useReview";
import { Link } from "react-router-dom";
import CustomerReview from "../CustomerReview/CustomerReview";
import "./Home.css";

const Home = () => {
  const [reviews, setReviews] = useReview();
  return (
    <div className="main-container">
      <div className="banner-container">
        <div className="banner-text">
          <h1>Enhance Your Style</h1>
          <p>
           Level up your style & confidence <br />
            with Gucci
          </p>
          <br />
          <button className="shop-btn">Shop Now</button>
        </div>
        <div className="banner-img">
          <img
            style={{ width: "400px" }}
            src="https://cdn-images.farfetch-contents.com/12/96/49/36/12964936_31615675_1000.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="review-section">
        <div>
          <CustomerReview></CustomerReview>
        </div>

        <div>
          <Link to="/reviews">
            <button>See all reviews</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
