import '../css/Vic.css'
import { useState, useEffect } from 'react'
import VicDetails from './VicDetails'

function Vic({ vic }){
  const [ primeStatus, setPrimeStatus ] = useState(vic.prime_status)
  const [ weaponsStatus, setWeaponsStatus ] = useState(vic.weapons_status)
  const [ commsStatus, setCommsStatus ] = useState(vic.comms_status)
  const [ crewStatus, setCrewStatus ] = useState(vic.crew_status)
  const [ nightStatus, setNightStatus ] = useState(vic.night_status)
  const [isVisible, setIsVisible] = useState(false);

  return(
    <>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Hide' : 'Show'} Vehicle Update Form
      </button>
      <div className='vicCard'>
        {
          vic.nomenclature == 'M1 Abrams' ?
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Abrams-transparent.png/250px-Abrams-transparent.png'
              height='auto'
              width = '165px'
            />
            :
              vic.nomenclature == 'M1280A1 JLTV' ?
              <img
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Oshkosh_L-ATV_in_2024.jpg/960px-Oshkosh_L-ATV_in_2024.jpg'
                height='auto'
                width = '165px'
              />
            :
              vic.nomenclature == 'DRASH' ?
              <img
                src='https://www.hdtglobal.com/wp-content/uploads/2016/03/Products_HP2C-188_04-500x500.jpg'
                height='auto'
                width = '165px'
              />
            :
              vic.nomenclature == 'M1078 LMTV' ?
              <img
                src='https://general-jims.com/wp-content/uploads/2023/07/IMG_2736-scaled.jpg'
                height='auto'
                width = '165px'
              />
            :
              vic.nomenclature == 'M149A2 Buffalo' ?
              <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEyHXZPdwreReqPoBUf_jhpEL6LjC4w7yG7g&s'
                height='auto'
                width = '165px'
              />
            : <img src='https://www.svgrepo.com/show/407321/red-question-mark.svg' height='75px' width='auto'/>
        }
        <p>
          Bumper #:
          {vic.bumper_num}
        </p>
        <p>
          Platoon :
          {vic.platoon}
        </p>
        <p>
          SN #:
          {vic.serial}
        </p>
        <p style={{ backgroundColor: primeStatus == 1 ? 'green' : 'red', color: 'white', padding: '8px' }}>
          Overall :
          {primeStatus}
        </p>
        <p style={{ backgroundColor: weaponsStatus == 1 ? 'green' : 'red', color: 'white', padding: '8px' }}>
          Weapon :
          {weaponsStatus}
        </p>
        <p style={{ backgroundColor: commsStatus == 1 ? 'green' : 'red', color: 'white', padding: '8px' }}>
          Comms :
          {commsStatus}
        </p>
        <p style={{ backgroundColor: crewStatus == 6 ? 'green' : crewStatus >= 4 ? 'yellow' : 'red', color: 'white', padding: '8px' }}>
          Crew :
          {crewStatus}
        </p>
        <p style={{ backgroundColor: nightStatus == 1 ? 'green' : 'red', color: 'white', padding: '8px' }}>
          Night :
          {nightStatus}
        </p>
      </div>
      {isVisible && (
        <VicDetails
        key={`${primeStatus}-${weaponsStatus}-${commsStatus}-${crewStatus}-${nightStatus}`}
          id={vic.id}
          setPrimeStatus={setPrimeStatus}
          primeStatus={primeStatus}
          setWeaponsStatus={setWeaponsStatus}
          weaponsStatus={weaponsStatus}
          setCommsStatus={setCommsStatus}
          commsStatus={commsStatus}
          setCrewStatus={setCrewStatus}
          crewStatus={crewStatus}
          setNightStatus={setNightStatus}
          nightStatus={nightStatus}
        />
      )}
    </>
  )
}

export default Vic;