/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const { faker } = require('@faker-js/faker');
let data = []
let faked = 5
data.push({id: 0, uic: 'BNUIAA', subordinate_units: '[1,2,3,4]', native_vehicles: '[0,1,2,3,4]'})
for (let i = 1; i < faked; i++) {
  let fakeUic = String(faker.lorem.word({length: 6}))
  data.push({id: i, uic: fakeUic, subordinate_units: null, native_vehicles: null})
}


exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('units').del()
  await knex('units').insert(data);
};
