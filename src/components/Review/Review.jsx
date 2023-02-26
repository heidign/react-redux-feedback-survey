import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "./Review.css";

function Review() {
  const history = useHistory();
  const [review, setReview] = useState("");
  const survey = useSelector((store) => store.survey);
  const swal = withReactContent(Swal);

  const handleClick = () => {
    if ((setReview, !review)) {
    //   swal.fire({
    //     title: "Thank you!",
    //     text: "Your submission has been received!",
    //     confirmButtonText: "Ok",
    //   });
    // } else {
    //   swal.fire({
    //     icon: "error",
    //     title: "Oops...",
    //     text: "Oops! Must submit your reflections.",
    // });
    axios
        .post("/feedback", survey)
      .then(() => {
        history.push("/submission")
      })
        .catch((err) => console.log("Error in client side POST:", err));
    }
  };

  // go back to previous page
  const goBack = () => {
    history.goBack();
  };
  return (
    <>
      <h2>Please Review Your Feedback</h2>
      <p>Feelings: {survey.feeling}</p>
      <p>Understanding: {survey.understanding}</p>
      <p>Support: {survey.support}</p>
      <p>Comments: {survey.comments}</p>
      <button onClick={handleClick}>Submit</button>
      <button onClick={goBack}>Back</button>
    </>
  );
}

export default Review;
