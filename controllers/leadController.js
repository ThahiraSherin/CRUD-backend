const Lead = require('../models/Lead');
const lead = require('../models/Lead');

const getLeads = async(req,res) => {
    try {
        const leads = await lead.find();
        res.json(leads);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

const addLead = async(req,res) => {
    try {
        const lead = await Lead.create(req.body);
        res.status(201).json(lead);
    }
    catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    } 
};

const updateLead = async(req,res) => {
    try {
        const lead = await Lead.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!lead) {
            return res.status(404).json({ message: 'Lead not found' });
        }
        res.json(lead);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

const deleteLead = async(req,res) => {
    try {
        const lead = await Lead.findByIdAndDelete(req.params.id);
        if (!lead) {
            return res.status(404).json({ message: 'Lead not found' });
        }
        res.json({ message: 'Lead deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

module.exports = {
    getLeads,
    addLead,
    updateLead,
    deleteLead,
};