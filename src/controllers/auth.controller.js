import User from '../models/user.model.js';

export const register = async (req, res) => {
    const { email, password, username } = req.body;

    try {
        const newUser = new User({
            username,
            email,
            password
        });
        const userSave = await newUser.save();//Metodo para gusar un usuario a la db
        res.json(userSave)//mostrar en json el dato guardado
        // res.send('Usuario registrado con éxito');

    } catch (error) {
        console.error(error);
        res.status(500).send('Error al registrar el usuario');
    }
};

export const login = (req, res) => {
    res.send('Login');
};


