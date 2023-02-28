
import { useHistory } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
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
      <Button 
          sx={{ m: 1.5 }}
          variant="contained"
          color="secondary"
          size="small"
          onClick={handleClick}>Leave New Feedback</Button>
    </>
  );
};

export default Submission;