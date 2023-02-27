import axios from "axios";
import { useState, useEffect } from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell as Cell,
} from "@mui/material";
import AdminItem from "./AdminItem/AdminItem";

function Admin() {
  const dispatch = useDispatch();
  // const [surveys, setSurveys] = useState([]);
  const surveys = useSelector(store => store.surveys);

  useEffect(() => {
    getSurveys();
  }, []);

  //  getting surveys from database
  const getSurveys = () => {
    axios
      .get("/feedback")
      .then((response) => {
        dispatch({ type: "SET_SURVEYS", payload: response.data });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <h2>Admin page</h2>
      <div>
        <Table>
          <TableHead>
            <TableRow>
              <Cell>Feeling</Cell>
              <Cell>Understanding</Cell>
              <Cell>Support</Cell>
              <Cell>Comments</Cell>
            </TableRow>
          </TableHead>
          <TableBody>
            {surveys.map((survey, i) => (
              <AdminItem key={i} surveys={surveys} getSurveys={getSurveys} />
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}

export default Admin;
