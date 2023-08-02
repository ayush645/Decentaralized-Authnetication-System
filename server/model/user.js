const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    name:{
     type: String
    },
    ethAddress: { 
        type: String 
    },
}
    
);

const User = model("User", UserSchema);
module.exports = User;
