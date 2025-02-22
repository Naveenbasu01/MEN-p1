const express = require("express");
const router = express.Router();
const {
  fetchUsers,
  createUser,
  updateUserById,
  deleteUserById,
} = require("../controller/userController");

router.get("/getAll", async (req, res) => {
  await fetchUsers(req, res);
});

router.post("/addUser", async (req, res) => {
  await createUser(req, res);
});

router.put("/updateUser/:id", async (req, res) => {
  await updateUserById(req, res);
});

router.delete("/deleteUser/:id", async (req, res) => {
  await deleteUserById(req, res);
});

module.exports = router;
