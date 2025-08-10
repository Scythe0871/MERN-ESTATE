import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default:
        "https://www.google.com/imgres?q=profile%20image&imgurl=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2023%2F02%2F18%2F11%2F00%2Ficon-7797704_640.png&imgrefurl=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fprofile%2520icon%2F&docid=laM92qStupq3TM&tbnid=IEMGLHTGr2n8wM&vet=12ahUKEwjwi4il__6OAxUhl2oFHepkFuYQM3oECDUQAA..i&w=640&h=640&hcb=2&ved=2ahUKEwjwi4il__6OAxUhl2oFHepkFuYQM3oECDUQAA",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
