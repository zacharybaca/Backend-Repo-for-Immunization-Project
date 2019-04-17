
exports.up = function(knex, Promise) {
    return knex.schema
        .createTable('vaccines_table', tbl => {
            tbl.increments();
            tbl.string('immunizationName')
                .notNullable();
            tbl.string('dateReceived')
                .notNullable();
            tbl.string('placeReceived')
                .notNullable();
            tbl.string('givenBy')
                .notNullable();
            tbl.string('nextShotDue')
                .notNullable();
            tbl.string('doseInfo')
                .notNullable();
            tbl.string('doseNumber')
                .notNullable();
            tbl.integer('patientInfoID')
                .references('id').inTable('patient_info_table')
                .notNullable();
            tbl.integer('practitionerID')
                .references('id').inTable('practitioner_info_table')
                .notNullable();
            tbl.integer('userId?(allowed?)')
                .references('id').inTable('users_table')
                .notNullable();
        });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('vaccines_table');
};
