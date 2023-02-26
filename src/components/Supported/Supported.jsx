import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./Supported.css";

function Supported() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [supported, setSupported] = useState(0);

  const handleClick = () => {
    if (supported > 0 && supported < 6) {
      dispatch({
        type: "SET_SUPPORT",
        payload: supported,
      });
      history.push("/comments");
      // history.goBack();
    } else {
      alert("Oops! Must enter a rating.");
    }
  };

  const handleChange = (e) => {
    setSupported(e.target.value);
  };

  return (
    <>
      <h2>On a scale of 1-5, how well are you being supported?</h2>
      <div>
        <label>Support?</label>
      </div>
      <input type="number" min="1" max="5" onChange={handleChange}></input>
      <button onClick={handleClick}>NEXT</button>
    </>
  );
}

export default Supported;
