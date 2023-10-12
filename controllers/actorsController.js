const db = require('../db/connection');

// Obtener todos los actores
exports.getAllActors = async (req, res) => {
    try {
        const [actors] = await db.query('SELECT * FROM actor');
        res.json(actors);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtener un actor por ID
exports.getActorById = async (req, res) => {
    const actorId = req.params.id;
    try {
        const [actor] = await db.query('SELECT * FROM actor WHERE actor_id = ?', [actorId]);
        res.json(actor[0]);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Crear un nuevo actor
exports.createActor = async (req, res) => {
    const { first_name, last_name } = req.body;
    try {
        const [result] = await db.query('INSERT INTO actor (first_name, last_name) VALUES (?, ?)', [first_name, last_name]);
        const newActorId = result.insertId;
        res.status(201).json({ actorId: newActorId });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Actualizar actor por ID
exports.updateActor = async (req, res) => {
    const actorId = req.params.id;
    const { first_name, last_name } = req.body;
    try {
        await db.query('UPDATE actor SET first_name = ?, last_name = ? WHERE actor_id = ?', [first_name, last_name, actorId]);
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Eliminar actor por ID
exports.deleteActor = async (req, res) => {
    const actorId = req.params.id;
    try {
        await db.query('DELETE FROM actor WHERE actor_id = ?', [actorId]);
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};