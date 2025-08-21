import Star from './Star';
import { useState } from 'react';

const Rating = (color = gold) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  // const color = 'gold';
  const feedbackMessages = ['Terrible', 'Poor', 'Fair', 'Good', 'Excellent'];
  return (
    <div className='rating-container'>
      <h2>Rate Your Experience</h2>
      <div className='stars'>
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            star={star}
            rating={rating}
            hover={hover}
            color={color}
          ></Star>
          // <span
          //   onClick={() => {
          //     setRating(star);
          //   }}
          //   onMouseEnter={() => {
          //     setHover(star);
          //   }}
          //   onMouseLeave={() => {
          //     setHover(0);
          //   }}
          //   key={star}
          //   className={`star ${star <= (hover || rating) ? 'active' : ''}`}
          // >
          // </span>
        ))}
      </div>
      {rating > 0 && <p className='feedback'>{feedbackMessages[rating - 1]}</p>}
    </div>
  );
};

export default Rating;
