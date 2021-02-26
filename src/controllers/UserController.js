const models          = require('../models');

const UserController = class {

    static getHomePage(req, res) {
        res.send('Evo sam na home page majkoooo');
    }

    static async getUsers(req, res) {
        await models.users.findAll()
        .then(response => {
            res.status(200).json({
                message: "Success!",
                data: response
            });
        })
        .catch(error => {
            res.status(403).send(error);
        });
    }

    static async storeUser(req, res) {
        let { first_name, last_name, avatar, email } = req.body;
        await models.users.create({
            first_name,
            last_name,
            avatar,
            email
        })
        .then(response => res.status(200).json(response))
        .catch(error => console.log(error));
    }

};

module.exports = UserController;