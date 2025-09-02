/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('vehicles', table => {
    table.increments()
    table.string('serial')
    table.string('bumper_num')
    table.string('nomenclature')
    table.smallint('platoon')
    table.smallint('prime_status')
    table.smallint('comms_status')
    table.smallint('weapons_status')
    table.smallint('night_status')
    table.smallint('crew_status')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('vehicles')
};
