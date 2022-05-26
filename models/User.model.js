const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema(
  {
    username:   {
        type: String,
        unique: true,
        required: true,
      },
    password: {
     type: String,
     required: true,
    },
    name: {
      type: String,
      required: true,
     },
    lastName: {
      type: String,
      required: true,
     },
    email:  {
        type: String,
        unique: true,
        required: true,   
      },
    profilePic: {
      type: String,
      default: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/profile-design-template-4c23db68ba79c4186fbd258aa06f48b3_screen.jpg?ts=1581063859"
    },
    works: [{
      type: Schema.Types.ObjectId,
      ref: 'Work'
    }],
    likes: [{
      type: Schema.Types.ObjectId,
      ref: 'Work',
    }],
  },
  {
   timestamps: true,
  },
);

const User = model("User", userSchema);

module.exports = User;
