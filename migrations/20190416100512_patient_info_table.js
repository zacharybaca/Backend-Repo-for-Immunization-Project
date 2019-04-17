
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
            .references('id').inTable('users_table')
            .notNullable();
        tbl.string('whoCanAccess')
            .notNullable();
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('patient_info_table');
};
