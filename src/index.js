import app from './app.js'
import { conectDB } from './db.js'

conectDB()//Conectarse a mongodb

const PORT = 4000
app.listen(PORT)
console.log(`Server on port ${PORT}`)