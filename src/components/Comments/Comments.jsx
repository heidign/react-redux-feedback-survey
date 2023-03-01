import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Button, ButtonGroup, TextField, FormLabel } from "@mui/material";
import "./Comments.css";

function Comments() {
  const history = useHistory();
  const dispatch = useDispatch();
  const storedValue = useSelector(store => store.survey.comments);
  const [comments, setComments] = useState(storedValue);
  const swal = withReactContent(Swal);

  const handleClick = () => {
    dispatch({
      type: "SET_COMMENTS",
      payload: comments,
    });
    history.push("/review");
    // history.goBack();
    swal.fire({
      // icon: 'success',
      title: "Thank you!",
      text: "Please review your responses",
      confirmButtonText: "Ok",
      confirmButtonColor: "#ab47bc"
    });
  };

  const handleChange = (e) => {
    setComments(e.target.value);
  };
  // go back to previous page
  const goBack = () => {
    history.goBack();
  };

  return (
    <>
      <FormLabel>On a scale of 1-5, how well are you being supported?</FormLabel>
      <div></div>
      <TextField
        type="text"
        style={{ width: 300 }}
        sx={{ mt: 1 }}
        helpText=" "
        autoFocus
        hiddenLabel
        label="comments"
        variant="outlined"
        size="small"
        color="secondary"
        inputProps={{
          inputMode: "text",
          alignSelf: "center"
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

export default Comments;
