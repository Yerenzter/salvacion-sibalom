import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import db from "./db";

const server = express();
const host = "http://localhost";
const port = 4435;

server.use(express.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// POST
server.post("/accounts/post", async (req, res) => {
  const task = req.body;
  const data = await db.pool.query("INSERT INTO accounts VALUES(id, ?,?,?,?)", [
    task.username,
    task.passphrase,
    task.role,
    task.creation,
  ]);
  console.log(data);
});

server.post("/accounts/search", async (req, res) => {
  const task = req.body;
  const data = await db.pool.query(
    "SELECT * FROM accounts WHERE id=? OR username=?",
    [task.id, task.username]
  );
  console.log(data);
});

server.post("/accounts/delete", async (req, res) => {
  const task = req.body;
  const data = await db.pool.query("DELETE FROM accounts WHERE id=?", [
    task.id,
  ]);
  console.log(data);
});

server.post("/residents/post", async (req, res) => {
  const task = req.body;
  const data = await db.pool.query(
    "INSERT INTO residents VALUES(id, ?,?,?,?,?,?,?,?,?,?)",
    [
      task.fname,
      task.mname,
      task.lname,
      task.age,
      task.gender,
      task.marital_status,
      task.purok,
      task.birthday,
      task.birthplace,
      task.voter_status,
    ]
  );
  console.log(data);
});

server.post("/residents/search", async (req, res) => {
  const task = req.body;
  const data = await db.pool.query(
    "SELECT * FROM residents WHERE id=? OR fname=? OR mname=? OR lname=?",
    [task.id, task.fname, task.mname, task.lname]
  );
  res.send(data);
});

server.post("/residents/delete", async (req, res) => {
    const task = req.body;
    const data = await db.pool.query("DELETE FROM residents WHERE id=?", [
      task.id,
    ]);
    console.log(data);
  });

// GET
server.get("/accounts", async (req, res) => {
    const task = req.body;
    const data = await db.pool.query("SELECT * FROM accounts", [task.id]);
    res.send(data);
});

server.get("/residents", async (req, res) => {
    const task = req.body;
    const data = await db.pool.query("SELECT * FROM residents", [task.id]);
    res.send(data);
});

// PUT

// DELETE

// SERVER LISTEN
server.listen(port, () =>
  console.log(`API server is now running at ${host}:${port}...`)
);
