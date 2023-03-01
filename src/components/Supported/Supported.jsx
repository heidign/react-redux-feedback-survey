import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Button, ButtonGroup, TextField, FormLabel } from "@mui/material";
import "./Supported.css";

function Supported() {
  const history = useHistory();
  const dispatch = useDispatch();
  const storedValue = useSelector(store => store.survey.supported);
  const [supported, setSupported] = useState(storedValue);
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
        confirmButtonColor: "#ab47bc"
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
    setSupported(e.target.value);
  };
  // go back to previous page
  const goBack = () => {
    history.goBack();
  };


  const min = 1;
  const max = 5;

  return (
    <>
      <FormLabel>On a scale of 1-5, how well are you being supported?</FormLabel>
      <div></div>
      <TextField
        type="number"
        style={{ width: 150 }}
        sx={{ mt: 1 }}
        helpText=" "
        autoFocus
        hiddenLabel
        label="support"
        variant="outlined"
        size="small"
        color="secondary"
        inputProps={{
          inputMode: "numeric",
          min,
          max,
          pattern: "/^-?d+(?:.d+)?$/g",
        }}
        onChange={handleChange}
      ></TextField>
      <ButtonGroup
        sx={{ m: 1.5, width: 150 }}
        variant="outlined"
        color="secondary"
        size="small"
      >
        <Button onClick={handleClick}>Next</Button>
        <Button onClick={goBack}>Back</Button>
      </ButtonGroup>
    </>
  );
}

export default Supported;
