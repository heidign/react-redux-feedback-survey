const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

router.post("/", (req, res) => {
  const sqlQuery = `INSERT INTO feedback (feeling, understanding, support, comments)
    VALUES ($1, $2, $3, $4);
    `;
  const sqlParams = [
    req.body.feeling,
    req.body.understanding,
    req.body.support,
    req.body.comments,
  ];
  pool
    .query(sqlQuery, sqlParams)
    .then(() => {
      res.sendStatus(204);
    })
    .catch((err) => {
      console.error("Error in Router POST:", sqlQuery, err);
      res.sendStatus(500);
    });
});

router.get("/", (req, res) => {
  const sqlQuery = `SELECT * FROM feedback
    ORDER BY id ASC;`;
  pool
    .query(sqlQuery)
    .then((dbRes) => {
      res.send(dbRes.rows);
    })
    .catch((err) => {
      console.error("Error in Router GET:", sqlQuery, err);
      res.sendStatus(500);
    });
});

module.exports = router;
