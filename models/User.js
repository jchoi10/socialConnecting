const { Schema, model } = require('mongoose');

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
            match: [/^[a-z0-9_\.]+@[a-z0-9\.]+\.[a-z]{2,3}$/i, '`email` is invalid']
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: "Thought",
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
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