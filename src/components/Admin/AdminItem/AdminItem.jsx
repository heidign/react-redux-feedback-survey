import axios from "axios";
import {
  TableRow,
  TableCell as Cell,
} from "@mui/material";

function AdminItem({ survey, getSurveys }) {
  return (
    <>
      <TableRow>
        <Cell>{survey.feeling}</Cell>
        <Cell>{survey.understanding}</Cell>
        <Cell>{survey.support}</Cell>
        <Cell>{survey.comments}</Cell>
        <Cell></Cell>
      </TableRow>
    </>
  );
}

export default AdminItem;
