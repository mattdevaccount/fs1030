import express from 'express';
import * as jwtGenerator from 'jsonwebtoken'
import jwtVerify from '../verification/jwtVerify.js';

const router = express.Router();

router.post('/auth', (req, res) => {
    const email = req.body.email
    const password = req.body.password

    let goodEmail = "MattDevAccount"
    let goodPassword = "password"

    if (req.body.email == goodEmail && req.body.password == goodPassword) {
        const token = jwtGenerator.sign({email}, process.env.JWT_secret, {expiresIn: '1m'})
        res.send({token})
    }
    res.status(400).send({message: "incorrect credentials provided"})
})

export default router;