//will setup express js here
//goto expressjs.com->get started->hellow world


const express = require('express')
const app = express()
const mongoDB=require("./db")
mongoDB();
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(express.json())
app.use('/api', require("./Routes/CreatUser"))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

