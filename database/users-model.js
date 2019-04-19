const db = require('../database/dbConfig.js');

module.exports = {
    add,
    find,
    findBy,
    findById,
};

function find() {
    return db('patients_table').select('id', 'username', 'password', 'firstName', 'lastName', 'email', 'role');
}

function findBy(filter) {
    return db('patients_table').where(filter);
}

async function add(user) {
    const [id] = await db('patients_table').insert(user);

    return findById(id);
}

function findById(id) {
    return db('patients_table')
                .where({ id })
                .first();
}

