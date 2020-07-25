const koa = require("koa");
const bodyParser = require("koa-body");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const tasks = require("./routes/tasks");

const app = new koa();
const port = parseInt(process.env.PORT, 10) || 5000;

// Database connection
mongoose.connect(
  process.env.DB_CONNECT_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("> Connected to Database");
  }
);

// Middleware
app.use(bodyParser());
app.use(tasks.routes());

app.listen(port, () => {
  console.log(`> Server running at port ${port}`);
});
