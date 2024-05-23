const express = require("express");
const mongoose = require("mongoose")
const app = express();

mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log("데이터베이스 연결 성공 !"))
.catch(e => console.log(`데이터베이스 연결 실패 ${e}`))

app.get("/", (req, res) => res.send("Express on Vercel"));

app.listen(3001, () => console.log("Server ready on port 3000."));

module.exports = app;