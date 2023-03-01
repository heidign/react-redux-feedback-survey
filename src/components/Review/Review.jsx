import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Paper from '@mui/material/Paper';
import {
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell as Cell,
  ButtonGroup,
  Button,
} from "@mui/material";
import "./Review.css";

function Review() {
  const history = useHistory();
  const [review, setReview] = useState("");
  const survey = useSelector((store) => store.survey);
  const swal = withReactContent(Swal);

  const handleClick = () => {
    if (setReview && !review) {
      axios
        .post("/feedback", survey)
        .then(() => {
          history.push("/submission");
        })
        .catch((err) => console.log("Error in client side POST:", err));
    }
  };

  // go back to previous page
  const goBack = () => {
    history.goBack();
  };

  // maxWidth: 250 

  // display: 'flex', flexWrap: 'wrap',
  // , maxWidth: -250
  return (
    <>
      <h2>Please Review Your Feedback</h2>
      <Paper elevation={5} sx={{ my: 1, mx: 'auto', maxWidth: 350, px: 1}}>
      <TableContainer>
      
        <Table align="center"
          className="review-table"
          sx={{ my: 2, px: 1}}
          size="small"
        >
          <TableBody className="review-items">
            <TableRow>
              <Cell align="left">Feeling:</Cell>
              <Cell align="right">{survey.feeling}</Cell>
            </TableRow>
            <TableRow>
              <Cell>Understanding:</Cell>
              <Cell align="right">{survey.understanding}</Cell>
            </TableRow>
            <TableRow>
              <Cell>Support:</Cell>
              <Cell align="right">{survey.support}</Cell>
            </TableRow>
            <TableRow>
              <Cell>Comments</Cell>
              <Cell align="right">{survey.comments}</Cell>
            </TableRow>
          </TableBody>
          </Table>
          
        </TableContainer>
        </Paper>

      <ButtonGroup
        sx={{ m: 1.5}}
        variant="contained"
        color="secondary"
        size="normal"
        aria-label="contained secondary button group"
        >
        <Button onClick={goBack}>Back</Button>
        <Button onClick={handleClick}>Next</Button>
        </ButtonGroup>

    </>
  );
}

export default Review;
