const express = require("express");
const app = express();
const mainRouter = require("./routes/index");
const cors = require("cors");

app.use(express.json());
app.use(cors({
    origin:["https://payzap-jtn5.vercel.app"],
    methods:["POST","GET"],
    credentials:true

}));
app.use("/api/v1",mainRouter);





app.listen(3000);