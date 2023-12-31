require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const morgan = require('morgan')
const dataroutes = require('./routes/dataroutes')
const userRoutes = require('./routes/userRoutes')
const reviewRoutes = require('./routes/reviewroutes')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const app = express();
const database = process.env.DATABASE;
app.use(cors())
app.options('*',cors())
app.use(morgan('dev'))
app.use(express.json())
app.use('/',dataroutes)
app.use("/user",userRoutes)
app.use('/review',reviewRoutes)
app.use(cookieParser())

mongoose
  .connect(database, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`DB connected successfully`))
  .catch((error) => console.log(`Error occured ${error}`));

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
