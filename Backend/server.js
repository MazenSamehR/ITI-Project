require("./src/config/db");
const cors = require("cors");

const app = require("express")();
const port = 8008;

const UserRouter = require("./src/routes/user");
const GameRouter = require("./src/routes/game");
const GenreRouter = require("./src/routes/genre");
const PlatformRouter = require("./src/routes/platform");
const StoreRouter = require("./src/routes/store");
const ReviewRouter = require("./src/routes/reviews");
const CartRouter = require("./src/routes/cart");
const bodyParser = require("express").json;
app.use(bodyParser());
app.use(cors());
app.use("/", UserRouter);
app.use("/", GameRouter);
app.use("/", GenreRouter);
app.use("/", PlatformRouter);
app.use("/", StoreRouter);
app.use("/", ReviewRouter);
app.use("/", CartRouter);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
