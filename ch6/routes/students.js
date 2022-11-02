import express from "express";
const router = express.Router();
// All Student Routes

router.get("/all", (req, res) => {
  res.send("All Student");
});

router.post("/create", (req, res) => {
  res.send("New Student Created");
});

router.put("/update", (req, res) => {
  res.send("Update Student");
});

router.put("/delete", (req, res) => {
  res.send("Delete Student");
});

// module.exports = router
export default router;
