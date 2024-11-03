import mongoose from "mongoose"; // Módulo para conectar Mongo db

export const conectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost/merndb")//Connecting to MongoDB
        console.log('>>> db is connected')//Message from connection
    } catch (error) {
        console.log(error)
    };

}

// export const conectDB = async () => {
//     try {
//         const username = 'jolgo'
//         const password = 'AP288338'
//         const host = 'localhost'
//         const dbname = 'merndb'
//         URI de conexión con credenciales
//         const uri = `mongodb://${username}:${password}@${host}/${dbname}?authSource=admin`;

//         Conectar a la base de datos
//         await mongoose.connect(uri);

//         console.log('>>>>> DB conectada');
//     } catch (error) {
//         console.log('Error conectando a la DB:', error);
//     }
// };

//?base de datos sin autenticación
