const { Router } = require('express');
const router = Router();
var jwt = require('express-jwt');
var auth = jwt({
    secret: 'MY_SECRET',
    userProperty: 'payload',
    algorithms: ['HS256']
});

var ctrlProfile = require('../controladores/profile');
var ctrlAuth = require('../controladores/authentification');

// profile
router.get('/profile', auth, ctrlProfile.profileRead);
router.delete('/profile', ctrlProfile.deleteAll)

// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

module.exports = router;