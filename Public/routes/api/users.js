const express = require('express');

const router = express.Router();
const users = require ('/../../Users')

router.get('/', (req,res) => {
    req.send(users);
});

module.exports = router ;