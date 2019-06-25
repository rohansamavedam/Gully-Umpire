const path = require('path')
const express = require('express')

//Creating a express app
const app = express()
const port = process.env.PORT || 8080

//Path config 
const publicDir = path.join(__dirname,'../public')

//Static data
app.use(express.static(publicDir)) 

app.get('/score', (req, res) => {
    
})

app.listen(port, () => {
    console.log('listening on port '+port)
})
