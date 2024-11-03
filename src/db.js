import mongoose from "mongoose"; // Módulo para conectar Mongo db

export const conectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost/merndb")//Connecting to MongoDB
        console.log('>>> db is connected')//Message from connection
    } catch (error) {
        console.log(error)
    };

}

//!esta base de datos hay que autenticarla
