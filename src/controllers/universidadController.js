const Universidad = require('../models/universidadModel'); 

exports.listUniversidad = async (req, res) => {
    console.log("Servidor actual: ", process.env.HOST);
    try {
        const universidad = await Universidad.find(); 
        return res.json(universidad);
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
};

exports.postUniversidad = async (req, res) => {
    const universidad = new Universidad(req.body); 
    try {
        await universidad.save();
        return res.status(201).json(universidad);
    } catch (error) {
        return res.status(400).json({
            message: error.message
        });
    }
};

exports.updateUniversidad = async (req, res) => {
    try {
        const updateUniversidad = await Universidad.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updateUniversidad) {
            return res.status(404).json({ message: 'Universidad no encontrada' });
        }
        return res.status(200).json({ message: 'Universidad actualizada con éxito', universidad: updateUniversidad });
    } catch (error) {
        return res.status(400).json({
            message: error.message
        });
    }
};

exports.deleteUniversidad = async (req, res) => {
    try {
        const deleteUniversidad = await Universidad.findByIdAndDelete(req.params.id);
        if (!deleteUniversidad) {
            return res.status(404).json({ message: 'Universidad no encontrada' });
        }
        return res.status(200).json({ message: 'Universidad eliminada correctamente' });
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
};
