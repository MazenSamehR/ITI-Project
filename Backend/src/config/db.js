const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://pesfifa200020:IlA7qdORhg5AED5x@cluster0.fi3wq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.log(err));
