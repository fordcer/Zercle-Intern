import express from "express";
const app = express();
const port = 3000;

import users from "./Routes/users.mjs";
import department from "./Routes/department.mjs";

app.use(express.json());
app.use("/users", users);
app.use("/department", department);

app.get("/", (req,res) => {
    return res.send("it's work!!")
});

app.listen(port, () => {
console.log("App listen on port : ", port)
});