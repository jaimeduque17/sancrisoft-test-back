const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const expressValidator = require("express-validator");
const cors = require("cors");
require("dotenv").config();

// import routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");

// app
const app = express();

// db
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB CONNECTION ERROR: ", err));

// middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
app.use(cors());

// routes middleware
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`-- Server is running on port ${port} --`);
});


// // import mongoose
// const mongoose = require('mongoose');
// // load env variables
// const dotenv = require('dotenv');
// dotenv.config()

// //db connection
// mongoose.connect(
//   process.env.MONGO_URI,
//   {useNewUrlParser: true}
// )
// .then(() => console.log('DB Connected'))

// mongoose.connection.on('error', err => {
//   console.log(`DB connection error: ${err.message}`)
// });
// MONGO_URI=mongodb+srv://jaime:abcd.1234@nodeapi-4j8ti.mongodb.net/nodeapi?retryWrites=true&w=majority

// MongoDB Atlas
// zzckomgg@zeroe.ml
// abcd.1234