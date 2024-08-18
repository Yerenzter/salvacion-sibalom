import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import db from "./db";
import GenerateClearance from "./docs/Clearance";
import GenerateCutting from "./docs/Cutting";
import GenerateIndigency from "./docs/Indigency";

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
  res.send(data);
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
    "SELECT * FROM residents WHERE id LIKE ? OR fname LIKE ? OR mname LIKE ? OR lname LIKE ?",
    [`${task.id}%`, `${task.fname}%`, `${task.mname}%`, `${task.lname}%`]
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
  const data = await db.pool.query(
    "SELECT * FROM accounts WHERE role='Admin' OR role='Personnel'",
    [task.id]
  );
  res.send(data);
});

server.get("/accounts/login", async (req, res) => {
  const task = req.body;
  const data = await db.pool.query("SELECT * FROM accounts", [task.id]);
  res.send(data);
});

server.get("/residents", async (req, res) => {
  const task = req.body;
  const data = await db.pool.query("SELECT * FROM residents", [task.id]);
  res.send(data);
});

server.get("/residents/filter/registered-voters", async (req, res) => {
  const task = req.body;
  const data = await db.pool.query(
    "SELECT * FROM residents WHERE voter_status='Registered'"
  );
  res.send(data);
});

server.get("/residents/filter/male", async (req, res) => {
  const task = req.body;
  const data = await db.pool.query("SELECT * FROM residents WHERE sex='Male'");
  res.send(data);
});

server.get("/residents/filter/female", async (req, res) => {
  const task = req.body;
  const data = await db.pool.query(
    "SELECT * FROM residents WHERE sex='Female'"
  );
  res.send(data);
});

// PUT
server.put("/accounts/edit", async (req, res) => {
  const task = req.body;
  const data = await db.pool.query(
    "UPDATE accounts SET username=?, passphrase=? WHERE id=?",
    [task.username, task.passphrase, task.id]
  );

  console.log(data);
});

server.put("/residents/edit", async (req, res) => {
  const task = req.body;
  const data = await db.pool.query(
    "UPDATE residents SET fname=?, mname=?, lname=?, age=?, gender=?, marital_status=?, purok=?, birthday=?, birthplace=?, voter_status=? WHERE id=?",
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
      task.id,
    ]
  );
  console.log(data);
});

// DELETE

// GENERATE PDF DOCUMENTS
server.post("/document/create/clearance", async (req, res) => {
  const task = req.body;
  res.send(GenerateClearance(task.fullname, task.age, task.sex));
});

server.post("/document/create/cutting", async (req, res) => {
  const task = req.body;
  res.send(GenerateCutting(task.fullname, task.property));
});

server.post("/document/create/indigency", async (req, res) => {
  const task = req.body;
  res.send(GenerateIndigency(task.fullname));
});

// SERVER LISTEN
server.listen(port, () =>
  console.log(`API server is now running at ${host}:${port}...`)
);
