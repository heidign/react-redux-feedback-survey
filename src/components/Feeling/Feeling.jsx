import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./Feeling.css";

function Feeling() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [feeling, setFeeling] = useState(0);

  const handleClick = () => {
    if (feeling > 0 && feeling < 6) {
      dispatch({
        type: "SET_FEELING",
        payload: feeling
      })
      history.push("/understanding");
      // history.goBack();
    } else {
      alert("Oops! Must enter a rating.");

    }
  };

  const handleChange = (e) => {
    setFeeling(e.target.value);
  };

  return (
    <>
      <body>
        <h2>On a scale of 1-5, how are you feeling today?</h2>
        <div>
          <label>Feeling?</label>
        </div>
        <input type="number" min="1" max="5" onChange={handleChange}></input>
        <button onClick={handleClick}>NEXT</button>
      </body>
    </>
  );
}

export default Feeling;
