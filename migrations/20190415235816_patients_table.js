
exports.up = function(knex) {
  return knex.schema
    .createTable('users_table', tbl => {
        tbl.increments();
        tbl.string('username')
            .notNullable()
            .unique('username');
        tbl.timestamp('createdAt').defaultTo(knex.fn.now());

        tbl.string('password')
            .notNullable();
        tbl.string('firstName')
            .notNullable();
        tbl.string('lastName')
            .notNullable();
        tbl.string('email')
            .notNullable();
        tbl.string('role')
            .notNullable();
        
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users_table');
};
