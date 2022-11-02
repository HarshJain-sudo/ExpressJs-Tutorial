import express from "express";
const router = express.Router();
// All Teacher Routes

router.get("/all", (req, res) => {
  res.send("All Teacher");
});

router.post("/create", (req, res) => {
  res.send("New Teacher Created");
});

router.put("/update", (req, res) => {
  res.send("Update Teacher");
});

router.put("/delete", (req, res) => {
  res.send("Delete Teacher");
});

// module.exports = router
export default router;
