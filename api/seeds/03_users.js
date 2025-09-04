/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.seed = function(knex) {
  // Deletes ALL existing entries

  return knex('users').del()
  .then(one => {
    return knex('units').select('uic').from('units')
      .then(output => {
        let bnUic = output[0]
        let oneUic = output[1]
        let twoUic = output[2]
        let threeUic = output[3]
        let fourUic = output[4]

        return [
          {id: 1, username: 'BN', password: 'pass', uic: bnUic.uic, platoon: '0123'},
          {id: 2, username: 'ACO', password: 'pass', uic: oneUic.uic, platoon: '0123'},
          {id: 3, username: 'ACOPL', password: 'pass', uic: oneUic.uic, platoon: '1'},
          {id: 4, username: 'BCO', password: 'pass', uic: twoUic.uic, platoon: '0123'},
          {id: 5, username: 'BCOPL', password: 'pass', uic: twoUic.uic, platoon: '1'},
          {id: 6, username: 'CCO', password: 'pass', uic: threeUic.uic, platoon: '0123'},
          {id: 7, username: 'CCOPL', password: 'pass', uic: threeUic.uic, platoon: '1'},
          {id: 8, username: 'DCO', password: 'pass', uic: fourUic.uic, platoon: '0123'},
          {id: 9, username: 'DCOPL', password: 'pass', uic: fourUic.uic, platoon: '1'}
        ]
      })
      .then(data => {
        return knex('users').insert(data)
      })
    })
};