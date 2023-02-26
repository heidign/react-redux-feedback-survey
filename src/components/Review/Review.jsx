import { useState } from "react";
import { useHistory } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';

import './Review.css';

function Review() {
    const history = useHistory();
    // const dispatch = useDispatch();
    
  const handleClick = () => {
      alert('Thank you for your submission!');
      // change location
      history.push('/submission');
      // history.goBack();
    }
    return (
        <>
        <h2>Review Your Feedback</h2>
        <button onClick={handleClick}>Submit</button>
        </>
    )
};

export default Review;