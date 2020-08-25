import express from 'express'
import formRoutes from './src/formRoutes.js'
import userRoutes from './src/userRoutes.js'
import authRoutes from './src/authRoutes.js'
import cors from 'cors'

const app = express()
const port = process.env.PORT || 3000;
// allows us to parse json 
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => res.send('Hello world'))
app.use('/', formRoutes, userRoutes, authRoutes)

app.listen(port, () => console.log(`API server ready on http://localhost:${port}`))