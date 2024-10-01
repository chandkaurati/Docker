import express from "express"
import mongoose  from "mongoose";
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

app.listen(PORT, ()=>{
  console.log("app is listning")
})
