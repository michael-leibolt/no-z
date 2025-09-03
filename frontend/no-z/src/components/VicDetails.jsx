import { useState, useEffect } from 'react'

function VicDetails({id, setPrimeStatus, primeStatus, setWeaponsStatus, weaponsStatus, setCommsStatus, commsStatus, setCrewStatus, crewStatus, setNightStatus, nightStatus}) {
  const [ overall, setOverall ] = useState(primeStatus)
  const [ weapon, setWeapon ] = useState(weaponsStatus)
  const [ comms, setComms ] = useState(commsStatus)
  const [ crew, setCrew ] = useState(crewStatus)
  const [ night, setNight ] = useState(nightStatus)

  function handleOver(event) {
    setOverall(event.target.value)
  }
  function handleWeap(event) {
    setWeapon(event.target.value)
  }
  function handleComm(event) {
    setComms(event.target.value)
  }
  function handleCrew(event) {
    setCrew(event.target.value)
  }
  function handleNigh(event) {
    setNight(event.target.value)
  }
  async function clickHandler(){
    if(overall && weapon && comms && crew && night){
      let form = {
        id: id,
        overall: overall,
        weapon: weapon,
        comms: comms,
        crew: crew,
        night: night
      }
      try {
        const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/vehicles`, {
          method: 'PATCH',
          headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          },
          body: JSON.stringify(form)
        })

        if(!res.ok) {
          throw new Error(`Server Error! Status ${res.status}`)
        }
        let data = await res.json()
        if(data){
          setPrimeStatus(data[0].prime_status)
          setWeaponsStatus(data[0].weapons_status)
          setCommsStatus(data[0].comms_status)
          setCrewStatus(data[0].crew_status)
          setNightStatus(data[0].night_status)
        }

      } catch (err) {
        console.error("Failed to update vehcile", err);
      }
    }
  }
  return (
    <>
      <h3>Key</h3>
      <p>General: 1 is good, 0 is bad</p>
      <p>Exception: Crew is highest gunnery table completed</p>
      <label>Enter Overall
        <input type='text' value={overall} onChange={handleOver}/>
      </label>
      <label>Enter Weapon
        <input type='text' value={weapon} onChange={handleWeap}/>
      </label>
      <label>Enter Comms
        <input type='text' value={comms} onChange={handleComm}/>
      </label>
      <label>Enter Crew
        <input type='text' value={crew} onChange={handleCrew}/>
      </label>
      <label>Enter Night
        <input type='text' value={night} onChange={handleNigh}/>
      </label>
      <button onClick={clickHandler}>Update All</button>

    </>
  )
}

export default VicDetails;