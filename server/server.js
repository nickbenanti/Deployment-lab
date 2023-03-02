const express = require('express')
const app = express()
const path = require('path')
const Rollbar = require('rollbar')
const rollbar = new Rollbar({
  accessToken: '7224845033234ae58e932631d151f9ec',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

rollbar.log('Hey Nick you actually got it to work!')

app.use(express.json())
app.use(express.static(`public`))

// const = {
//     yesButton,

// } = require('./controller')


app.get('/',(req,res) =>{
    res.status(200).sendFile(path.join(__dirname, '..public/index.html'))
})
app.get('/css',(req,res) =>{
    res.status(200).sendFile(path.join(__dirname, '../public/styles.css'))
})

app.get('/js', (req,res) =>{
    res.status(200).sendFile(path.join(__dirname, '../public/main.js'))
    rollbar.log('Used button')
})





app.listen(4000, () => console.log(`Server runnig on 4000`))
