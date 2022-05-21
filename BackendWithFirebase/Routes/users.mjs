import { async } from "@firebase/util";
import express from "express";
import { collection, addDoc, getDocs, getDoc, doc, setDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase.mjs";
const router = express.Router();

router.get("/", (req, res) => {
  return res.send("Hello from user router!");
});

router.get("/addAdaLoveLace", async (req, res) => {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      first: "Ada",
      last: "Lovelace",
      born: 1815,
    });
    return res.send(`Document written with ID: ${docRef.id}`);
  } catch (e) {
    return res.send(`Error adding document: ${e}`);
  }
});

router.get("/all", async (req,res) => {
  const querySnapshot = await getDocs(collection(db, "users"));
  const userData = querySnapshot.docs.map((doc) => doc.data())
  res.json(userData);
});

router.get("/:userID", async (req,res) => {
  const querySnapshot = await getDoc(doc(db, "users", req.params.userID));
  const userData = querySnapshot.data();
  res.json(userData);
});

router.post("/create", async (req,res) => {
  const body = req.body;
  await setDoc(doc(db, "users", `${body.first} ${body.last}`), body);
  return res.send(`Doccument written ${body.first} ${body.last}`);
});

router.patch("/update/:userID", async (req,res) => {
  const body = req.body;
  await updateDoc(doc(db, "users", req.params.userID), body);
  return res.send(`Doccument updated ${req.params.userID}`);
})

router.delete("/delete/:userID", async (req,res) => {
  await deleteDoc(doc(db, "users", req.params.userID));
  return res.send(`Doccument Deleted ${req.params.userID}`);
})

export default router;
