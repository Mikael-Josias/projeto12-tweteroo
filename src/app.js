import express from "express";
import cors from "cors";

const server = express();
server.use(cors());

server.post("/sign-up", (req, res) => {

});

server.post("/tweets", (req, res) =>{

});

server.get("/tweets", (req, res) => {

});

server.listen(5000, (req, res) => {
    console.log("Backend Inicializado!!🚀");
});