
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
    })
};

exports.down = function(knex, Promise) {
  
};
