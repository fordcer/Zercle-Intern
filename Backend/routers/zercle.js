const express = require("express")
const router = express.Router()

function checkTpsInZercle (req,res,next) {
    const thisPerson = req.body.person;
    if (thisPerson == undefined) {
        res.json({
            err : "Who are you ?"
        });
    }
    if (thisPerson == "Kevin")  {
        next()
    }
    res.json({
        err : "you don,t have permission"
    })
}

router.get("/", (req,res) => {
    res.send("Hello from Zercle Router");
});

router.get("/supersecret", checkTpsInZercle, (req,res) => {
    res.send("Hello from secret");
});

router.post('/incubation', (req,res) => {
    const body = req.body;
    res.json(body);
});

router.post('/incubation/:memberName', (req,res) => {
    const memberName = req.params.memberName;
    const year = req.query.year;
    const place = req.body.place;
    const msg = req.body.msg;
    res.json(`Hello ${memberName}!, welcome to ${place} in year ${year}, ${msg}`);
})

router.get('/incubation', (req,res) => {
    const memberName = req.query.memberName;
    const year = req.query.year;
    res.send(`Hello ${memberName} welcome to zercle incubation ${year}`);
})
  
router.get('/:memberName', (req,res) => {
    res.json({
      name : req.params.memberName
      });
})

module.exports = router;

