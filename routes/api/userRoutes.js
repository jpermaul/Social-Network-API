const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
  addFriend,
  removeFriend,
} = require('../../controllers/userController.js');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).delete(deleteUser).put(updateUser);

// /api/users/:userId/assignments
// router.route('/:userId/assignments').post(addAssignment);

// /api/users/:userId/assignments/:assignmentId
router.route('/:userId/friends/:friendId').delete(removeFriend).post(addFriend);

module.exports = router;
