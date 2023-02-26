import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "./Feeling.css";

function Feeling() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [feeling, setFeeling] = useState(0);
  const swal = withReactContent(Swal);

  const handleClick = () => {
    if (feeling > 0 && feeling < 6) {
      dispatch({
        type: "SET_FEELING",
        payload: feeling,
      });
      history.push("/understanding");
      // history.goBack();
      // alert("Oops! Must enter a rating.");
      swal.fire({
        // icon: 'success',
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
    setFeeling(e.target.value);
  };

  return (
    <>
      <div className="feeling-body">
        <h2>On a scale of 1-5, how are you feeling today?</h2>
        <div>
          <label>Feeling?</label>
        </div>
        <input type="number" min="1" max="5" onChange={handleChange}></input>
        <button onClick={handleClick}>NEXT</button>
      </div>
    </>
  );
}

export default Feeling;
