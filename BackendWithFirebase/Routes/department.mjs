import { async } from "@firebase/util";
import express from "express";
import { collection, addDoc, getDocs, getDoc, doc, setDoc } from "firebase/firestore";
import { db } from "../firebase.mjs";
const router = express.Router();

router.get("/:docID", async (req,res) => {
    const querySnapshot = await getDoc(doc(db, "department", req.params.docID));
    const userData = querySnapshot.data();
    res.json(userData);
});

router.post("/create/:dpm_name", async (req,res) => {
    const body = req.body;
    await setDoc(doc(db, "department", req.params.dpm_name), body);
    return res.send(`Doccument written with ID: ${req.params.dpm_name}`);
});



export default router;