const express = require('express')
const mongoose = require('mongoose')
const multer = require('multer')
const { findById } = require('../models/model')

const app = express()

const File = require('../models/model')
const router = express.Router()



router.get('/', async (req, res) => {
    try {
        res.send("This is the get request")
    } catch (e) {
        res.status(400).send()
        console.log(e)
    }
})

const upload = multer({
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
            return cb(new Error('Please Upload an image'))
        }
        
        cb(undefined, true)
    }
})
 


router.post('/image', upload.single('image'),async(req,res) => {
    const buffer = await req.file.buffer

    try {
        const file = new File({
            title: req.body.title,
            image: buffer
        })
        await file.save()
        res.send('The file was saved')
    } catch (e) {
        res.status(400).send(e.message)
        console.log(e)
    }
})

router.get('/:id', async(req, res) => {
    try {
        const file = await File.findById(req.params.id)

    if (!file || !file.image) {
        throw new Error()
    }

    res.set('Content-Type', 'image/jpg')
    res.send(file.image)
    } catch (e) {
        res.status(400).send()
        console.log("error from get", e)
    }
    
})

module.exports = router