import User from '../models/user.model.js';

//Obtener datos de los usuarios
export const getUser = async (req, res) => {
    try {
        const newUser = await User.find({})
        return res.status(200).send({ message: "Recipe has been updated!", data: newUser })

    } catch (error) {
        return res.status(400).send({ message: "Error Occured in update!", error: error.message })

    }

}

//Agregar un usuario
export const postUser = async (req, res) => {
    const { email, password, username } = req.body;

    try {
        const newUser = new User({
            username,
            email,
            password
        });
        await newUser.save();//Metodo para gusar un usuario a la db
        return res.status(200).send({ message: "Data has been added!", data: newUser })
    } catch (error) {
        return res.status(400).send({ message: "Error Occured!", error: error.message })
    }
};

//Actualizar un usuario
export const putUser = async (req, res) => {
    const { email, password, username } = req.body;
    try {
        const userId = req.params.userId;

        // Verificar que los campos no estén vacíos
        // if (!userId || !email || !password || !username) {
        //     return res.status(400).send({ message: "Todos los campos son obligatorios" });


        // Actualizar el usuario y devolver el documento actualizado
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { email, password, username },//Esta parte representa los datos que se desean actualizar en el documento de MongoDB
            { new: true, runValidators: true }
            //new: true: Esta opción asegura que la función devuelva el documento actualizado
            //runValidators: true: Esta opción permite que las validaciones del esquema se apliquen durante la actualización
        );

        if (!updatedUser) {
            return res.status(404).send({ message: "Usuario no encontrado" });
        }

        return res.status(200).send({ message: "Usuario actualizado correctamente", updatedUser });
    } catch (error) {
        return res.status(400).send({ message: "Ocurrió un error en la actualización", error: error.message });
    }

};

//Eliminar un usuario
export const deleteUser = async (req, res) => {
    try {
        const userId = req.params.userId;
        console.log(`Eliminando usuario con ID: ${userId}`); // Log para verificar el ID

        // Eliminar el usuario
        const deletedUser = await User.findByIdAndDelete(userId);

        if (!deletedUser) {
            return res.status(404).send({ message: "Usuario no encontrado" });
        }

        return res.status(200).send({ message: "Usuario eliminado correctamente" });
    } catch (error) {
        return res.status(400).send({ message: "Ocurrió un error en la eliminación", error: error.message });
    }
};

//!Nota ruta para actualizar un usuario #1:http://localhost:4000/api/user/6727600321b77c44f1f62c8e
