const express = require("express")
const router = express.Router()

function checkInput(req,res,next) {

}

router.get("/", (req,res) => {
    const value1 = req.body.value1;
    const ops = req.body.ops;
    const value2 = req.body.value2;
    let computation
    switch (ops) {
        case '+':
          computation = value1 + value2
          break
        case '-':
          computation = value1 - value2
          break
        case '*':
          computation = value1 * value2
          break
        case '/':
          computation = value1 / value2
          break
        default:
          return
      }
    res.send(computation.toString());
});

module.exports = router;