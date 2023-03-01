import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Button, TextField, FormLabel } from "@mui/material";

import "./Feeling.css";

function Feeling() {
  const history = useHistory();
  const dispatch = useDispatch();
  const storedValue = useSelector(store => store.survey.feeling);
  const [feeling, setFeeling] = useState(storedValue);
  const swal = withReactContent(Swal);

  const handleClick = () => {
    if (feeling > 0 && feeling < 6) {
      dispatch({
        type: "SET_FEELING",
        payload: feeling,
      });
      history.push("/understanding");

      swal.fire({
        // icon: 'success',
        title: "Thank you!",
        text: "Keep going",
        confirmButtonText: "Ok",
        confirmButtonColor: "#ab47bc",
      });
    } else {
      swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Oops! Must enter a rating of 1-5.",
      });
    }
  };

  const handleChange = (e) => {
    setFeeling(e.target.value);
  };

  const min = 1;
  const max = 5;

  return (
    <>
      <div className="feeling-body">
        <FormLabel>On a scale of 1-5, how are you feeling today?</FormLabel>
        <div></div>
        <TextField
          onChange={handleChange}
          value={feeling}
          type="number"
          autoFocus
          hiddenLabel
          aria-label="feeling"
          style={{ width: 150 }}
          sx={{ mt: 1 }}
          helpText=" "
          label="feeling"
          variant="outlined"
          size="small"
          color="secondary"
          inputProps={{
            inputMode: "numeric",
            min,
            max,
            pattern: "/^-?d+(?:.d+)?$/g",
          }}
        ></TextField>
        <Button
          sx={{ m: 1.5 }}
          variant="outlined"
          color="secondary"
          size="small"
          onClick={handleClick}
        >
          Next
        </Button>
      </div>
    </>
  );
}

export default Feeling;
