import axios from "axios";
import { useState, useEffect } from "react";

function Admin() {
  const [surveys, setSurveys] = useState([]);

  useEffect(() => {
    getSurveys();
  }, []);

  const getSurveys = () => {
    axios
      .get("/feedback")
      .then((response) => {
        setSurveys(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <h2>Admin page</h2>
      <div>
        <table>
          <thead>
            <tr>
              <td>Feeling</td>
              <td>Understanding</td>
              <td>Support</td>
              <td>Comments</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              {surveys.map((survey) => {
                return <AdminItem key={survey.id} survey={survey} />;
              })}
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Admin;
