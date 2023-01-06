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
        console.log(tweets);
        msg = "OK";
    }
    res.send(msg);
});

server.get("/tweets", (req, res) => {
    res.send(buildTweets());
});

server.listen(5000, (req, res) => {
    console.log("Backend Inicializado!!🚀");
});

function isSigned(user){
    for (let i = 0; i < users.length; i++) {
        if (users[i].username === user) {
            return true;
        }
    }

    return false;
}

function returnUserAvatar(user){
    for (let i = 0; i < users.length; i++) {
        if (users[i].username === user) {
            return users[i].avatar;
        }
    }

    return "";
}

function buildTweets(){
    const newArr = [];

    if (tweets.length === 0) {
        return [];
    }

    for (let i = 0; i < 10 && i < tweets.length; i++) {
        const tweetData = {
            username: tweets[tweets.length - (i + 1)].username,
            avatar: returnUserAvatar(tweets[tweets.length - (i + 1)].username),
            tweet: tweets[tweets.length - (i + 1)].tweet,
        };
        
        newArr.push(tweetData);
    }
    console.log(newArr);
    return newArr;
}