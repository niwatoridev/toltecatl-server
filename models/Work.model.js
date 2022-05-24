const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const workSchema = new Schema(
  {
    title: String,        
    artType: {
      type: String,
      enum: ["Fotografia", "Ilustracion Digital", "Pintura", "Cortometraje", "Cancion", "Libro", "Poema"]
          },
    artist: {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
      workSource: String,
      content: {},      
    },
  {
   timestamps: true,
  },
);

const Work = model("Work", workSchema);

module.exports = Work;
