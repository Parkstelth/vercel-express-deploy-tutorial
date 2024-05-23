const express = require("express");
const mongoose = require("mongoose")
const cors = require('cors')
const app = express();
const User = require('./User')

const corsOptions = {
    origin: '*', // 해당 URL 주소만 요청을 허락함 
    credentials: true // 사용자 인증이 필요한 리소스를 요청할 수 있도록 허용함
}

console.log("몽고아틀라스 주소: ", process.env.MONGODB_URI)
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log("데이터베이스 연결 성공 !!!"))
.catch(e => console.log(`데이터베이스 연결 실패 ${e}`))

app.use(cors(corsOptions)) // cors 설정 미들웨어 
app.use(express.json()) // 요청본문 (request body) 파싱(해석)을 위한 미들웨어

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