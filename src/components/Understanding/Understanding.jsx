import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "./Understanding.css";

function Understanding() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [understanding, setUnderstanding] = useState(0);
  const swal = withReactContent(Swal);

  const handleClick = () => {
    if (understanding > 0 && understanding < 6) {
      dispatch({
        type: "SET_UNDERSTANDING",
        payload: understanding,
      });
      history.push("/supported");
      // history.goBack();
      Swal.fire({
        // icon: "success",
        title: "Thank you!",
        text: "Keep going",
        confirmButtonText: "Ok",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Oops! Must enter a rating.",
      });
    }
  };
  const handleChange = (e) => {
    setUnderstanding(e.target.value);
  };
  // go back to previous page
  const goBack = () => {
    history.push("/");
  };

  return (
    <>
      <h2>On a scale of 1-5, how well are you understanding the content?</h2>
      <div>
        <label>Understanding?</label>
      </div>
      <input type="number" min="1" max="5" onChange={handleChange}></input>
      <button onClick={goBack}>Back</button>
      <button onClick={handleClick}>Next</button>
    </>
  );
}

export default Understanding;
