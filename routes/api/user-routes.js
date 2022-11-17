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

router.route("/").get(getAllUser).post(createUser);

router.route("/:id").get(getUserById).post(updateUser).delete(deleteUser);

router.route("/:userId/friends/:friendId").put(addFriend).delete(deleteFriend);

module.exports = router;