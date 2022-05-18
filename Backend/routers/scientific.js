const express = require("express")
const router = express.Router()

router.get("/", (req,res) => {
    const equation = req.body.equation;
    res.send(eval(equation).toString());
});

module.exports = router;