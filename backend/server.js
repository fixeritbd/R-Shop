const express = require('express')
const app = express()
const bannerData = require('./bannerData')
var cors = require('cors')
const logoData = require('./logoData')
const delData = require('./delData')
const productData = require('./productData')
const featureBannerData = require('./featureBannerData')



app.use(cors())

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get('/featurebanner', function (req, res) {
    res.send(featureBannerData)
})
app.get('/products', function (req, res) {
    res.send(productData)
})


app.get('/deal', function (req, res) {
    res.send(delData)
})


app.get('/banner', function (req, res) {
    res.send(bannerData)
})
app.get('/logo', function (req, res) {
    res.send(logoData)
})

app.listen(8000, () => {
    console.log("server running on port 8000")
})