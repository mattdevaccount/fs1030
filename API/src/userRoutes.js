import express from 'express';
import dataHandler from './dataHandler.js'
import { v4 as uuidv4 } from 'uuid';
import jwtVerify from '../verification/jwtVerify.js';

const router = express.Router();

// creating a user
router.post('/users', (req, res) => {
    const errors = []

    if (req.body.name == null) {
        errors.push("name")
    }

//password length validation
    if (req.body.password.length <= 7) {
        errors.push("password must be minimum 8 characters")
    }
    
    if (req.body.password == null) {
        errors.push("password")
    }

//email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(req.body.email) || req.body.email == null) {
        errors.push("email")
    }

    if (errors.length > 0) {
        return res.status(400).send({message: "validation error", "invalid": errors})
    }

    req.body.id = uuidv4();

    dataHandler.addUser(req.body)

    return res.status(201).send(req.body)
})

//get route 
router.get('/users', jwtVerify, async (req, res) => {
    res.send(await dataHandler.getAll(dataHandler.userPath))
})

export default router;