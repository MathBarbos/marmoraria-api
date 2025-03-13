const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

router.get('/api/contact', contactController.getAllContact);
router.post('/api/contact', contactController.createOrUpdateContact);
router.put('/api/contact/:id', contactController.createOrUpdateContact);
router.delete('/api/contact/:id', contactController.deleteContact);
 
module.exports = router;