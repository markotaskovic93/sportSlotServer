const express         = require('express');
const Router          = express.Router();
const bodyParser      = require('body-parser');
const UserController  = require('../controllers/UserController');

/**TODO
 * Group Routes by prefix
 */
Router.use(bodyParser.urlencoded({
    extended: true
}));

// User routes
Router.get('/', UserController.getHomePage);
Router.get('/users', UserController.getUsers);
Router.post('/create-user', UserController.storeUser);


module.exports = Router;