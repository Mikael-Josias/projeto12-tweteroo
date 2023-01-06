import express from "express";
import cors from "cors";

const server = express();
server.use(cors());
server.use(express.json());

const users = [];

server.post("/sign-up", (req, res) => {
    const data = req.body;
    users.push(data);
    res.send("OK");
});

server.post("/tweets", (req, res) =>{

});

server.get("/tweets", (req, res) => {

});

server.listen(5000, (req, res) => {
    console.log("Backend Inicializado!!🚀");
});