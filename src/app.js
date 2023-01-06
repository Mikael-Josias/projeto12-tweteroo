import express from "express";
import cors from "cors";

const server = express();
server.use(cors());
server.use(express.json());

const users = [];
const tweets = [];

server.post("/sign-up", (req, res) => {
    const data = req.body;
    users.push(data);
    res.send("OK");
});

server.post("/tweets", (req, res) =>{
    const data = req.body;
    let msg = "UNAUTHORIZED";

    if (isSigned(data.username)) {
        tweets.push(data);
        msg = "OK";
    }

    res.send(msg);
});

server.get("/tweets", (req, res) => {

});

server.listen(5000, (req, res) => {
    console.log("Backend Inicializado!!🚀");
});

function isSigned(user){
    users.forEach((u) => {
        if (u.username === user) {
            return true;
        }
    });

    return false;
}