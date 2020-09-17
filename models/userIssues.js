const mongoose=require('mongoose');

const issuesSchema=new mongoose.Schema({
    title:{
        type: String,
        trim: true,
        required: true,
        maxlength: 40,
        unique: true
    },
    desc:{
        type: String,
        trim: true,
        required: true,
    },
    createdAt:Date
  },
  {timestamps: true}
);


module.exports=mongoose.model("Issues",issuesSchema);