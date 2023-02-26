import './Submission.css';
import { useHistory } from 'react-router-dom';

function Submission() {
  const history = useHistory();

  const handleClick = () => {
      alert('');
      // change location
      history.push('/feeling');
      // history.goBack();
    }
  return (
    <>
      <h2>Thank you!</h2>
      <button onClick={handleClick}>Leave New Feedback</button>
    </>
  )
};

export default Submission;