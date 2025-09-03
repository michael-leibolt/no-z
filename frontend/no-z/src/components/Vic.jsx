import '../css/Vic.css'
import { useState } from 'react'

function Vic({ vic }){
  const [ primeStatus, setPrimeStatus ] = useState('1')
  return(
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
      <p style={{ backgroundColor: primeStatus == 1 ? 'green' : 'red', color: 'white', padding: '8px' }}>
        Overall :
        {primeStatus}
      </p>
      <p style={{ backgroundColor: vic.weapons_status == 1 ? 'green' : 'red', color: 'white', padding: '8px' }}>
        Weapon :
        {vic.weapons_status}
      </p>
      <p style={{ backgroundColor: vic.comms_status == 1 ? 'green' : 'red', color: 'white', padding: '8px' }}>
        Comms :
        {vic.comms_status}
      </p>
      <p style={{ backgroundColor: vic.crew_status == 6 ? 'green' : vic.crew_status >= 4 ? 'yellow' : 'red', color: 'white', padding: '8px' }}>
        Crew :
        {vic.crew_status}
      </p>
      <p style={{ backgroundColor: vic.night_status == 1 ? 'green' : 'red', color: 'white', padding: '8px' }}>
        Night :
        {vic.night_status}
      </p>
      <p>
        SN #:
        {vic.serial}
      </p>

    </div>
  )
}

export default Vic;