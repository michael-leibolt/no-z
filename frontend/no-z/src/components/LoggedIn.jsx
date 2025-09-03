import { useState, useEffect } from 'react'

import Unit from './Unit.jsx'

function LoggedIn({ uic }){
  const [ subUnits, setSubUnits ] = useState(null)
  const [ allUnits, setAllUnits ] = useState(null)
  const [ unit, setUnit ] = useState(null)
  const [ vics, setVics ] = useState(null)
  const [ allVics, setAllVics] = useState(null)
  const [ subUnit1, setSubUnit1 ] = useState(null)
  const [ subUnit2, setSubUnit2 ] = useState(null)
  const [ subUnit3, setSubUnit3 ] = useState(null)
  const [ subUnit4, setSubUnit4 ] = useState(null)

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
              let items = unitVic.split(',')
              let myVics = []
              for(let j = 0; j < items.length; j++) {
                for(let i = 0; i < vehicles.length; i++) {
                  if(vehicles[i].id == items[j])
                    myVics.push(vehicles[i])
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
          }
          if(toFetch[j] == allUnits[i].id && toFetch[j] == 2){
            setSubUnit2(allUnits[i].uic)
          }
          if(toFetch[j] == allUnits[i].id && toFetch[j] == 3){
            setSubUnit3(allUnits[i].uic)
          }
          if(toFetch[j] == allUnits[i].id && toFetch[j] == 4){
            setSubUnit4(allUnits[i].uic)
          }
        }
      }
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
        <Unit vics={vics} unit={unit}/>

        {
          subUnit1 !== null ? <Unit key={subUnit1} uic={subUnit1} allVics={allVics} /> : <></>
        }
        {
          subUnit2 !== null ? <Unit key={subUnit2} uic={subUnit2} allVics={allVics} /> : <></>
        }
        {
          subUnit3 !== null ? <Unit key={subUnit3} uic={subUnit3} allVics={allVics} /> : <></>
        }
        {
          subUnit4 !== null ? <Unit key={subUnit4} uic={subUnit4} allVics={allVics} /> : <></>
        }
      </>
    )
  }
}

export default LoggedIn;