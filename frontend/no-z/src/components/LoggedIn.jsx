import { useState, useEffect } from 'react'

import Unit from './Unit.jsx'

function LoggedIn({ uic, platoon }){
  const [ subUnits, setSubUnits ] = useState(null)
  const [ allUnits, setAllUnits ] = useState(null)
  const [ unit, setUnit ] = useState(null)
  const [ vics, setVics ] = useState(null)
  const [ allVics, setAllVics] = useState(null)
  const [ subUnit1, setSubUnit1 ] = useState(null)
  const [ subUnit2, setSubUnit2 ] = useState(null)
  const [ subUnit3, setSubUnit3 ] = useState(null)
  const [ subUnit4, setSubUnit4 ] = useState(null)
  const [ relPlatoon, setRelPlatoon ] = useState(null)
  const [ subUnitVics1, setSubUnitVics1 ] = useState(null)
  const [ subUnitVics2, setSubUnitVics2 ] = useState(null)
  const [ subUnitVics3, setSubUnitVics3 ] = useState(null)
  const [ subUnitVics4, setSubUnitVics4 ] = useState(null)


  //getNative vics
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/units`)
    .then(res => res.json())
    .then(units => {
      setAllUnits(units)
      let data
      for(let i = 0; i < units.length; i++){
        if(units[i].uic == uic){
          setUnit(units[i])
          data = units[i]
          if(units[i].subordinate_units !== null) {
            setSubUnits(units[i].subordinate_units.slice(1, -1))
          }
        }
      }
      return data;
    })
    .then(data => {
        try {
          fetch(`${import.meta.env.VITE_API_BASE_URL}/vehicles`)
            .then(res => res.json())
            .then(vehicles => {
              setAllVics(vehicles)
              let unitVic = data.native_vehicles.slice(1, -1)
              let platoons = platoon.split('')
              setRelPlatoon(platoons)
              let items = unitVic.split(',')
              let myVics = []
              for(let n = 0; n < platoons.length; n++) {
                for(let j = 0; j < items.length; j++) {
                  for(let i = 0; i < vehicles.length; i++) {
                    if(vehicles[i].id == items[j] && vehicles[i].platoon == platoons[n])
                      myVics.push(vehicles[i])
                  }
                }
              }
              setVics(myVics)
          })
        }
        catch (err) {
          console.error("Failed to fetch vehicles:", err);
          }

  })
  }, [])

  //getSubUnit vics
  useEffect(() => {
    if(subUnits !== null && allVics !== null){
      let toFetch = subUnits.split(',')
      for(let j = 0; j < toFetch.length; j++) {
        for(let i = 0; i < allUnits.length; i++){
          if(toFetch[j] == allUnits[i].id && toFetch[j] == 1){
            setSubUnit1(allUnits[i].uic)
            let vics1 = []
            for(let n = 0; n < allVics.length; n++){
              if(allVics[n].bumper_num.includes(allUnits[i].uic))
                vics1.push(allVics[n])
            }
            setSubUnitVics1(vics1)
          }
          if(toFetch[j] == allUnits[i].id && toFetch[j] == 2){
            setSubUnit2(allUnits[i].uic)
            let vics2 = []
            for(let n = 0; n < allVics.length; n++){
              if(allVics[n].bumper_num.includes(allUnits[i].uic))
                vics2.push(allVics[n])
            }
            setSubUnitVics2(vics2)
          }
          if(toFetch[j] == allUnits[i].id && toFetch[j] == 3){
            setSubUnit3(allUnits[i].uic)
            let vics3 = []
            for(let n = 0; n < allVics.length; n++){
              if(allVics[n].bumper_num.includes(allUnits[i].uic))
                vics3.push(allVics[n])
            }
            setSubUnitVics3(vics3)
          }
          if(toFetch[j] == allUnits[i].id && toFetch[j] == 4){
            setSubUnit4(allUnits[i].uic)
            let vics4 = []
            for(let n = 0; n < allVics.length; n++){
              if(allVics[n].bumper_num.includes(allUnits[i].uic))
                vics4.push(allVics[n])
            }
            setSubUnitVics4(vics4)
          }
        }
      }
      // for(let n = 0; n < toFetch.length; n++) {
      //   if()
      // }
    }
  }, [subUnits, allVics])

  if(!allUnits || !unit || !vics || !allVics) {
    return (
      <>
        <h1>Loading Data...</h1>
      </>
    )
  } else {
    return(
      <>
        <Unit vics={vics} unit={unit} platoons={relPlatoon}/>

        {
          subUnit1 !== null ? <Unit key={subUnit1} uic={subUnit1} vics={subUnitVics1} platoons={relPlatoon}/> : <></>
        }
        {
          subUnit2 !== null ? <Unit key={subUnit2} uic={subUnit2} vics={subUnitVics2} platoons={relPlatoon} /> : <></>
        }
        {
          subUnit3 !== null ? <Unit key={subUnit3} uic={subUnit3} vics={subUnitVics3} platoons={relPlatoon} /> : <></>
        }
        {
          subUnit4 !== null ? <Unit key={subUnit4} uic={subUnit4} vics={subUnitVics4} platoons={relPlatoon} /> : <></>
        }
      </>
    )
  }
}

export default LoggedIn;

