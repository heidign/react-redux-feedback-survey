import './Review.css';
import { useHistory } from 'react-router-dom';

function Review() {
    const history = useHistory();

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