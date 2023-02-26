import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "./Supported.css";

function Supported() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [supported, setSupported] = useState(0);
  const swal = withReactContent(Swal);

  const handleClick = () => {
    if (supported > 0 && supported < 6) {
      dispatch({
        type: "SET_SUPPORT",
        payload: supported,
      });
      history.push("/comments");
      swal.fire({
        // icon: "success",
        title: "Thank you!",
        text: "Keep going",
        confirmButtonText: "Ok",
      });
    } else {
      swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Oops! Must enter a rating.",
      });
    }
  };

  const handleChange = (e) => {
    setSupported(e.target.value);
  };
  // go back to previous page
  const goBack = () => {
    history.goBack();
  };
  return (
    <>
      <h2>On a scale of 1-5, how well are you being supported?</h2>
      <div>
        <label>Support?</label>
      </div>
      <input type="number" min="1" max="5" onChange={handleChange}></input>
      <button onClick={goBack}>Back</button>
      <button onClick={handleClick}>Next</button>
    </>
  );
}

export default Supported;
