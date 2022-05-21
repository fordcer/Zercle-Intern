const express = require("express");
const router = express.Router();
const mariadb = require("mariadb");
const pool = mariadb.createPool({
    host: 'localhost', 
    port: '3306',
    user:'root', 
    password: '1478',
    database: 'company',
    connectionLimit: 5
});

// CRUD => Create Read Update Delete

router.get("/get/:SSN", async (req,res) => {
    const connection = await pool.getConnection();
    let result = await connection.query(`SELECT * FROM employee WHERE SSN = "${req.params.SSN}"`)
    connection.release();
    connection.end();
    return res.json(result);
})

router.post("/create", async (req,res) => {
    const body = req.body;
    const connection = await pool.getConnection();
    await connection.query(`INSERT INTO employee VALUE ("${body.Emp_name}"
    ,${body.Age},"${body.SSN}",${body.Salary}, ${body.Department}, ${body.graduated})`);
    connection.release();
    connection.end();
    return res.json({
        msg : "Created"
    });
});

router.delete("/delete/:SSN", async (req,res) => {
    const connection = await pool.getConnection();
    await connection.query(
        `DELETE FROM employee WHERE SSN = "${req.params.SSN}"`
    );
    connection.release();
    connection.end();
    return res.json({
        msg : "Deleted"
    });
});

router.patch("/update/:SSN", async (req,res) => {
    const ssn = req.params.ssn;
    const body = req.body;
    let queryString = "UPDATE employee SET ";
    for (let key in body) {
        if (key == "Emp_name") {
            queryString += `${key} = "${body[key]}", `;
        } else {
            queryString += `${key} = ${body[key]}, `;
        }
    }
    queryString = queryString.slice(0,-2);
    queryString += ` WHERE SSN = ${SSN}`;
    const connection = await pool.getConnection();
    await connection.query(queryString);
    connection.release();
    connection.end();
    return res.json({
        msg : "Updated"
    });
});

router.get("/all", async (req,res) => {
    const connection = await pool.getConnection();
    const data = await connection.query("SELECT * FROM employee");
    connection.release();
    connection.end();
    return res.json(data);
});

module.exports = router;