const express = require("express");
const mongoose = require("mongoose")
const app = express();

console.log("주소:", process.env.MONGODB_URI)
mongoose.connect("mongodb+srv://sunrise:you1234@cluster0.q2zkcuy.mongodb.net/sunrise?retryWrites=true&w=majority")
.then(() => console.log("데이터베이스 연결 성공 !"))
.catch(e => console.log(`데이터베이스 연결 실패 ${e}`))

app.get("/", (req, res) => res.send("Express on Vercel"));

app.listen(3001, () => console.log("Server ready on port 3000."));

module.exports = app;