// controllers/actorsController.js

const db = require('../db/connection');

exports.getAllActors = async (req, res) => {
    try {
        const [actors] = await db.query('SELECT * FROM actor');
        res.json(actors);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Aquí puedes agregar los otros controladores (crear actor, actualizar actor, eliminar actor, etc.)
// Obtener un actor por ID
exports.getActorById = async (req, res) => {
    const actorId = req.params.id;
    // Implementa la lógica aquí...
};

// Crear un nuevo actor
exports.createActor = async (req, res) => {
    const { first_name, last_name } = req.body;
    // Implementa la lógica aquí...
};

// Actualizar actor por ID
exports.updateActor = async (req, res) => {
    const actorId = req.params.id;
    const { first_name, last_name } = req.body;
    // Implementa la lógica aquí...
};

// Eliminar actor por ID
exports.deleteActor = async (req, res) => {
    const actorId = req.params.id;
    // Implementa la lógica aquí...
};