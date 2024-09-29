import express from "express";
import mongoose, { mongo } from "mongoose";
const app = express();
const PORT = 3000;

(async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `mongodb://${process.env.MONGO_URI || "localhost"}:27017`
    );
    if (connectionInstance) {
      console.log("Mongo connected  succefully");
      console.log(connectionInstance.connection.host);
    }
  } catch (error) {
    console.log(error);
  }
})();

const userSchema = new  mongoose.Schema({
    username : String,
    // date /: {type: Date, default : new Date.now()}
})

const User = mongoose.model("User", userSchema)
app.get("/",  (req, res) => {
  res.status(200).json({ messsage: "OK" });
});

app.get("/create",  (req, res) => {
  
  const user1 =  User("chand")
   user1.save()
  res.status(200).json({ messsage: "OK" });
  
});

app.listen(PORT, () => {
  console.log(`app is listning on port ${PORT}`);
});
