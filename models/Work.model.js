const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const workSchema = new Schema(
  {
    title: String,        
    artType: {
      type: String,
      enum: ["Fotografia", "Ilustracion Digital", "Pintura", "Cortometraje", "Cancion"]
          },
    artist: {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
      workSource: String,
      likes: Number,
      content: {},      
    },
  {
   timestamps: true,
  },
);

const Work = model("Work", workSchema);

module.exports = Work;
