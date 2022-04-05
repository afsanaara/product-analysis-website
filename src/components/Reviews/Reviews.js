import React from 'react';
import useReview from '../../Hooks/useReview';
import ShowReviews from '../ShowReviews/ShowReviews';
import './Reviews.css'

const Reviews = () => {
    const [reviews, setReviews] = useReview();
   return (
       <div>
           <div className="review-container">
               {
               reviews.map(review => <ShowReviews review={review}></ShowReviews>)
           }
           </div>
           
       </div>
   );
};

export default Reviews;