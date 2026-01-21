const express = require('express');
const { getLeads, addLead, updateLead, deleteLead } = require('../controllers/leadController');
const auth = require('../middleware/auth');


const router = express.Router();

// Routes for medicines
router.get('/', getLeads);
router.post('/', addLead);
router.put('/:id', auth, updateLead);
router.delete('/:id', auth, deleteLead);

module.exports = router;