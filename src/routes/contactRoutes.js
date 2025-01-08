const express = require('express');
const router = express.Router();
const submissionController = require('../controllers/submissionController');

router.get('/api/submissions', submissionController.getAllSubmission);
router.post('/api/submissions', submissionController.createSubmission);
router.put('/api/submissions/:id', submissionController.updateSubmission);
router.delete('/api/submissions/:id', submissionController.deleteSubmission);
 
module.exports = router;