import express from "express";
import stu from "./routes/students.js";
import tea from "./routes/teachers.js";
const app = express();

const port = 3000;
// Load Router Module
app.use("/student", stu);
app.use("/teachers", stu);

app.listen(port, () => {
  console.log(`server is running on port http://localhost:${port}`);
});
