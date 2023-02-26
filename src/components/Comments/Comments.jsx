import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "./Comments.css";

function Comments() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [comments, setComments] = useState("");
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
      <h2>Any comments you'd like to leave?</h2>
      <div>
        <label>Comments?</label>
      </div>
      <input
        type="text"
        onChange={handleChange}
        placeholder="comments or concerns"
      ></input>
      <button onClick={goBack}>Back</button>
      <button onClick={handleClick}>Next</button>
    </>
  );
}

export default Comments;
