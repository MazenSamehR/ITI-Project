require("./src/config/db");
const cors = require("cors");

const app = require("express")();
const port = 3000;

const UserRouter = require("./src/routes/user");
const GameRouter = require("./src/routes/game");
const GenreRouter = require("./src/routes/genre");
const PlatformRouter = require("./src/routes/platform");

const bodyParser = require("express").json;
app.use(bodyParser());
app.use(cors());
app.use("/", UserRouter);
app.use("/", GameRouter);
app.use("/", GenreRouter);
app.use("/", PlatformRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
