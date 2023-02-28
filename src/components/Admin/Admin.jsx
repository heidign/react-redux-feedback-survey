import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell as Cell,
} from "@mui/material";
import AdminItem from "./AdminItem/AdminItem";

function Admin() {

  const [surveyList, setSurveyList] = useState([]);
  const surveys = useSelector(store => store.surveys);

  //  getting surveys from database
  const getSurveys = () => {
    axios
      .get("/feedback")
      .then((response) => {
        setSurveyList(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getSurveys();
  }, []);

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
            {surveyList.map(survey => (
              <AdminItem survey={survey} getSurveys={getSurveys} />
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}

export default Admin;
