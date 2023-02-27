
import { useHistory } from 'react-router-dom';
import { useDispatch } from "react-redux";
import './Submission.css';

function Submission() {
  const history = useHistory();
  const dispatch = useDispatch();


  const handleClick = () => {
      dispatch({
        type: 'RESET_SURVEY'
      })
      // change location back to new survey
      history.push('/');
  };

  return (
    <>
      <h2>Success! Your feedback has been submitted!</h2>
      <button onClick={handleClick}>Leave New Feedback</button>
    </>
  );
};

export default Submission;