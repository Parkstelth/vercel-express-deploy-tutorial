const express = require("express");
const mongoose = require("mongoose")
const app = express();
const User = require('./User')

console.log("몽고아틀라스 주소: ", process.env.MONGODB_URI)
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log("데이터베이스 연결 성공 !!"))
.catch(e => console.log(`데이터베이스 연결 실패 ${e}`))

app.get("/", (req, res) => res.send("Express on Vercel"));

app.post("/user", (req, res) => {
    // user 데이터 생성 테스트
    console.log(req.body)
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        userId: req.body.userId,
        password: req.body.password  
    })
    user.save()
    .then(() => {
        console.log('회원가입 성공!')
        res.json({ newUser: user })
    })
    .catch(e => {
        console.log(e)
        res.status(400).json({ code: 400, message: 'Invalid User Data'})
    })
})

app.listen(3001, () => console.log("Server ready on port 3000."));

module.exports = app;