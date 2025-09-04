/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const { faker } = require('@faker-js/faker');





exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('vehicles').del()
  await knex('vehicles').insert(data);
};

exports.seed = function(knex) {

  return knex('vehicles').del()
    .then( one => {
      return knex('units').select('uic').from('units')
        .then(output => {
          let data = []
          let companies = 4
          let faked = 20

          let bnUic = output[0]
          let oneUic = output[1]
          let twoUic = output[2]
          let threeUic = output[3]
          let fourUic = output[4]

          for(let j = 0; j < 5; j++){
            let vehicle
            let num = 0
            let prime = 1
            let comms = 1
            let weapons = 1
            let night = 1
            let crew = 6
            if(j <= 1 ){
                vehicle = "M1 Abrams"
              } else if (j <= 3){
                vehicle = "M1280A1 JLTV"
              } else {
                vehicle = "DRASH"
              }
            data.push({
                id: j,
                serial: faker.commerce.isbn(),
                bumper_num: `${bnUic.uic}${faker.string.alphanumeric({length: {min: 2, max: 3}})}`,
                nomenclature: vehicle,
                platoon: num,
                prime_status: prime,
                comms_status: comms,
                weapons_status: weapons,
                night_status: night,
                crew_status: crew
              })
          }

          let order = 5
          for(let n = 0; n < companies; n++){
            let bumper
            if(n == 0){
              bumper = oneUic.uic
            }
            if(n == 1){
              bumper = twoUic.uic
            }
            if(n == 2){
              bumper = threeUic.uic
            }
            if(n == 3){
              bumper = fourUic.uic
            }
            for(let i = 0; i < faked; i++) {
              let vehicle
              let place = order
              order++
              let num
              let prime = 1
              let comms = 1
              let weapons = 1
              let night = 1
              let crew = 6
              if(i <= 13 ){
                vehicle = "M1 Abrams"
              } else if (i <= 16){
                vehicle = "M1280A1 JLTV"
              } else if ( i <= 18){
                vehicle = "M1078 LMTV"
              } else {
                vehicle = "M149A2 Buffalo"
              }
              if(i <= 3){
                num = 1
              } else if(i <=7){
                num = 2
              } else if(i <=11 ){
                num = 3
              } else {
                num = 0
              }


              data.push({
                id: place,
                serial: faker.commerce.isbn(),
                bumper_num: `${bumper}-${faker.string.alphanumeric({length: {min: 2, max: 3}})}`,
                nomenclature: vehicle,
                platoon: num,
                prime_status: prime,
                comms_status: comms,
                weapons_status: weapons,
                night_status: night,
                crew_status: crew
              })
            }
          }


          return data;
        })
        .then(data => {
          return knex('vehicles').insert(data)
        })
    })

}