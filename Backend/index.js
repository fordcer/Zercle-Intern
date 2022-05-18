const express = require('express')
const req = require('express/lib/request')
const app = express()
const port = 3000
const zercle = require("./routers/zercle")
const classic = require("./routers/classic")
const scientific = require("./routers/scientific")

app.use(express.json());

app.use("/zercle", zercle);
app.use("/classic", classic)
app.use("/scientific", scientific)

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})