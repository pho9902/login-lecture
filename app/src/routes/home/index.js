"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get('/', ctrl.output.home);
router.get('/login', ctrl.output.login);
router.post('/login', (req, res) => {
    ctrl.process.login(req, res)
});

module.exports = router;