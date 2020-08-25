import express from 'express';
import dataHandler from './dataHandler.js';
import { v4 as uuidv4 } from 'uuid';
import jwtVerify from '../verification/jwtVerify.js';
import * as db from './database.js'

const router = express.Router();
const idPath = dataHandler.formPath;

// post to create entry when submitting contact form
router.post('/contact_form/entries', async (req, res) => {
    
    const errors = []
    const id = uuidv4();

    if (req.body.name == null) {
        errors.push("name")
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(req.body.email) || req.body.email == null) {
        errors.push("email")
    }

    if (req.body.phoneNumber == null) {
        errors.push("phoneNumber")
    }

    if (req.body.content == null) {
        errors.push("content")
    }

    if (errors.length > 0) {
        return res.status(400).send({message: "validation error", "invalid": errors})
    }

    const message = await dataHandler.addForm(req.body, id, res)
    const returnMessage = {message:message.message, id}
    return res.status(message.status).send(returnMessage)
})

//get contact entries with correct token verification
router.get('/contact_form/entries', async (req, res) => {
    res.send(await dataHandler.getAll(dataHandler.formPath))
})

//searching by id functionality

router.get('/contact_form/entries/:id', async (req, res) => {
    let sql = 'SELECT * FROM contacts WHERE email = ?';
    let contactData = await db.query(sql, req.params.email);
    if (contactData.length > 0) {
        return res.send(contactData);
    } else
        return res.status(404).send({ message: `${req.params.id} not found` })
})

router.delete('/contact_form/entries', async (req, res) => {
    let sql = 'SELECT * FROM contacts WHERE email = ?'
    console.log(req.body.email)
    let contact = await db.query(sql, req.body.email)

    if (contact.length > 0) {
        sql = 'DELETE FROM contacts WHERE email = ?';
        await db.query(sql, req.body.email);
        return res.status(200).send({ message: 'Successfully deleted' })
    } else {
        return res.status(404).send({ message: 'No patient found' })
    }
})

export default router;