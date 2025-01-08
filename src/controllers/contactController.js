const Submission = require('../models/submissionModel.js');

exports.getAllSubmission = async (req, res) => {
    try {
        const { processId } = req.params;
        const submission = await Submission.find({ process: processId })            ;  // Busca todos os usuários
        res.json(submission);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createSubmission = async (req, res) => {
    try {
        const { processId } = req.body;
        const newSubmission = new Submission({
            ...req.body,
            process: processId,
    });
        await newSubmission.save();  // Salva o novo usuário no MongoDB
        res.status(201).json(newSubmission);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.updateSubmission = async (req, res) => {
    const { id } = req.params;
    try {
        const updateSubmission = Submission.findByIdAndUpdate(id, req.body, {new: true});
        if(!updateSubmission) {
            return res.status(404).json({ message: 'Submissão não encontrada' });
        }
        res.status(200).json(updateSubmission);
    } catch (err) {
        res.status(400).json({ message: 'err.message' });
    }
};

exports.deleteSubmission = async (req, res) => {
    const { id } = req.params; // Pega o ID da URL
    try {
        const deletedSubmission = await Submission.findByIdAndDelete(id); // Remove o documento
        if (!deletedSubmission) {
            return res.status(404).json({ message: 'Submissão não encontrada' });
        }
        res.status(200).json({ message: 'Submissão deletada com sucesso' });
    } catch (err) {
        res.status(500).json({ message: err.message }); 
    }
};