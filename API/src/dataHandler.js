import { promises as fs, write } from 'fs'
import * as db from './database.js'
import { v4 as uuidv4 } from 'uuid';

const formPath = './data/formData.json';
const userPath = './data/users.json';

const message = {};

const writeFile = async (data, path) => await fs.writeFile(path, JSON.stringify(data))

const getAll = async (path) => JSON.parse(await fs.readFile(path))

const addForm = async (req, id, res) => {
    let sql = 'SELECT * FROM contacts WHERE email = ?';
    let contacts = await db.query(sql, req.email);
    
    if(contacts.length == 0) {
        sql = 'INSERT INTO contacts (name, email, phoneNumber, content, id) VALUES (?,?,?,?,?)';
        let param = [req.name, req.email, req.phoneNumber, req.content, id]
        await db.query(sql, param);
        
        message.status = 201
        message.message = 'Contact successfully created'

    } 
    else {
        message.status = 400
        message.message = 'Contact already exists' 
    
    }

    return message;

}

const addUser = async data => {
        let content = await getAll(userPath)
        content.push(data)
        await writeFile(content, userPath);
}

export default {
    getAll,
    addForm,
    addUser,
    formPath,
    userPath
}