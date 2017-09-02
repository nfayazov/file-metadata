var express = require('express')
var multer = require('multer')
var fs = require('fs')
var app = express()

var upload = multer({})

var port = process.env.PORT || 3000

app.get('/', express.static('public'))

app.post('/upload', upload.single('file'), function(req, res) {
   res.json({size: req.file.size})
})

app.listen(port, function(err) {
   if (err) throw err
})
