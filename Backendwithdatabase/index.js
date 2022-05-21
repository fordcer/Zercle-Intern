const express = require("express");
const app = express();
const port = 3000;

const employee = require("./Routes/employee");

app.use(express.json());
app.use("/employee", employee);

app.get("/", (req,res) => {
    res.send("Hello Fordcer!");
})

app.listen(port, () => {
    console.log("App listen on port: ", port);
})