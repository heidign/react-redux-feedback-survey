import { useState } from "react";
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './Understanding.css';

function Understanding() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [understanding, setUnderstanding] = useState(0);

  const handleClick = () => {
    if (understanding > 0 && understanding < 6) {
      dispatch({
        type: 'SET_UNDERSTANDING',
        payload: understanding
      })
      history.push('/supported');
      // history.goBack();
    } else {
      alert("Oops! Must enter a rating.");
    }
  };

  const handleChange = (e) => {
    setUnderstanding(e.target.value);
};
  return (
    <>
      <h2>On a scale of 1-5, how well are you understanding the content?</h2>
      <div><label>Understanding?</label></div>
      <input type="number" min="1" max="5" onChange={handleChange}></input>
      <button onClick={handleClick}>NEXT</button>
    </>
  );
}

export default Understanding;
