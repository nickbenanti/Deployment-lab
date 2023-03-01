const express = require('express')
const path = require('path')
const app = express()

app.use(express.json())
app.use(express.static(`public`))


app.get('/',(req,res) =>{
    res.status(200).sendFile(path.join(__dirname, '..public/index.html'))
})
app.get('/css',(req,res) =>{
    res.status(200).sendFile(path.join(__dirname, '../public/styles.css'))
})

app.get('/js', (req,res) =>{
    res.status(200).sendFile(path.join(__dirname, '../public/main.js'))
})




app.listen(4000, () => console.log(`Server runnig on 4000`))
