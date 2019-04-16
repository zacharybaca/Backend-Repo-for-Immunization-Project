
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('practitioner_info_table', tbl => {
        tbl.increments();
        tbl.string('firstName')
            .notNullable();
        tbl.string('lastName')
            .notNullable();
        tbl.string('title')
            .notNullable();
        tbl.integer('userId')
            .references('id').inTable('users_table')
            .notNullable();
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('practitioner_info_table');
};
