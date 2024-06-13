const { User } = require('../models');
const bcrypt = require('bcrypt');

module.exports.registrationUser = async (req, res, next) => {
    try {
        const { body, passwordHash } = req;
        
        const createdUser = await User.create({ ...body, passwordHash }); 

        return res.status(201).send(createdUser);
    } catch (error) {
        next(error);
    }
}

module.exports.loginUser = async (req, res, next) => {
    try {
        // 1. Дістати з тіла http-запиту на логін: email, password
        const { body } = req;

        // 2. Перевіряємо, чи є користувач з таким імейлом
        const foundUser = await User.findOne({
            email: body.email
        });

        // 3. Якщо є користувач з таким імейлом - перевіряємо пароль, чи правильний він 
        // Якщо пароль правильний - логінемо користувача
        // Якщо пароль не правильний - викидаємо помилку

        if(foundUser) {
            const result = await bcrypt.compare(body.password, foundUser.passwordHash);
            if(!result) {
                return next(new Error());
            }
            return res.status(200).send('Logged in. Access granted');
        }
    } catch (error) {
        next(error);
    }
}
