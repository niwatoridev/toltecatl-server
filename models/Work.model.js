const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const workSchema = new Schema(
  {
    title: String,        
    type: {
        enum: ["Photography", "Digital Ilustration", "Paint", "Shortfilm", "Song", "Book", "Poem"]
          },
    artist: {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
      source: String,
      content: {},      
    },
  {
   timestamps: true,
  },
);

const Work = model("Work", workSchema);

module.exports = Work;
