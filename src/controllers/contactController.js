const Contact = require('../models/contactModel.js');

exports.getAllContact = async (req, res) => {
    try {
        const contact = await Contact.find(); 
        res.json(contact);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
exports.createOrUpdateContact = async (req, res) => {
    const { id } = req.params;

    if (id) {
        try {
            const updateContact = await Contact.findByIdAndUpdate(id, req.body, { new: true });

            if (!updateContact) {
                return res.status(404).json({ message: 'Contato não encontrado' });
            }

            return res.status(200).json(updateContact);
        } catch (err) {
            return res.status(400).json({ message: err.message });
        }
    }

    // Se não foi passado um ID, cria um novo contato
    try {
        const newContact = new Contact(req.body);
        await newContact.save();
        return res.status(201).json(newContact);
    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
};

exports.deleteContact = async (req, res) => {
    const { id } = req.params; // Pega o ID da URL
    try {
        const deletedContact = await Contact.findByIdAndDelete(id); // Remove o documento
        if (!deletedContact) {
            return res.status(404).json({ message: 'Contato não encontrado' });
        }
        res.status(200).json({ message: 'Contato deletado com sucesso' });
    } catch (err) {
        res.status(500).json({ message: err.message }); 
    }
};