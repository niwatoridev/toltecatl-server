const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const postSchema = new Schema(
  {
    artist: {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    work: {
        type: Schema.Types.ObjectId,
        ref: 'Work',
      },  
    rating: number,
    },
  {
   timestamps: true,
  },
);

//use sort js


const Post = model("Post", postSchema);

module.exports = Post;
