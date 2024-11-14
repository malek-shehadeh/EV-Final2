const express = require('express');
const router = express.Router();
const { addSubscription } = require('../controllers/subscriptioncontroller');
const auth = require('../middlewares/auth');

router.post('/', auth, addSubscription);

module.exports = router;