/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const { faker } = require('@faker-js/faker');
let data = []
let faked = 5
data.push({id: 0, uic: 'BNUIAA', subordinate_units: '[1,2,3,4]', native_vehicles: '[0,1,2,3,4]'})

for (let i = 1; i < faked; i++) {
  let vics
  let fakeUic = String(faker.lorem.word({length: 6}))
  if(i == 1) {
    vics = '[5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]'
  }
  else if(i == 2) {
    vics = '[25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44]'
  }
  else if(i == 3) {
    vics = '[45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64]'
  }
  else if(i == 4) {
    vics = '[65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84]'
  }
  data.push({id: i, uic: fakeUic, subordinate_units: null, native_vehicles: vics})
}


exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('units').del()
  await knex('units').insert(data);
};
