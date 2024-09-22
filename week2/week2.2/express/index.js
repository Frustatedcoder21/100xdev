const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const port = 3000
// express library doesn't parse the body , so we have to use body-parser
app.use(bodyParser.json()); // middleware
app.get('/', (req, res) => {
  res.send('Hello Mayank!')
})
app.post('/', (req, res) => { //sent from  clients computer using postman 
    console.log(req.body); // data which is being posted by client computer
  res.send('Hello Mayank!')
})
app.get('/convo', (req, res) => {
  res.send('Hello Mayank! How are you ??')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})