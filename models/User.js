const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const { valEmail } = require('validator');

const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            validate: [valEmail, "Please enter a valid email address!"],
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: "Thought",
            }
        ],
        friends: [
            {
                type: Schema.type.ObjectId,
                ref: "User",
            }
        ]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false,
    }
);

UserSchema.virtual('friendCount').get(function(){
    return this.replies.length;
});

const User = model("User", UserSchema);

module.exports = User;