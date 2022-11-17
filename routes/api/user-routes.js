const router = require("express").Router();
const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require("../../controllers/user-controller");
const { update } = require("../../models/Thought");

router.route("/").get(getAllUser).post(createUser);

router.route("/:id").get(getUserById).post(updateUser).delete(createUser);

router.route("/:userId/friends/:friendId").put(addFriend).delete(deleteFriend);

module.exports = router;