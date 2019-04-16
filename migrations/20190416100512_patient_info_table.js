
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('patient_info_table', tbl => {
        tbl.increments();
        tbl.string('firstName')
            .notNullable();
        tbl.string('lastName')
            .notNullable();
        tbl.string('gender')
            .notNullable();
        tbl.integer('userId')
            .references('id').inTable('patients_table')
            .notNullable();
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('patient_info_table');
};
