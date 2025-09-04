import { useState, useEffect } from 'react'

import Vic from './Vic.jsx'


function Unit({ vics, uic,  platoons}) {
  const [ firstPlatoon, setFirstPlatoon ] = useState(null)
  const [ secondPlatoon, setSecondPlatoon ] = useState(null)
  const [ thirdPlatoon, setThirdPlatoon ] = useState(null)
  const [ hqPlatoon, setHQPlatoon ] = useState(null)

  useEffect(() =>{
    if(vics){
      let hq = []
      let first = []
      let second = []
      let third = []

      for(let i = 0; i < vics.length; i++){
        if(vics[i].platoon == platoons[0]){
          hq.push(vics[i])
        } else if (vics[i].platoon == platoons[1]){
          first.push(vics[i])
        } else if (vics[i].platoon == platoons[2]) {
          second.push(vics[i])
        } else if (vics[i].platoon == platoons[3]) {
          third.push(vics[i])
        }
      }

      setFirstPlatoon(first)
      setSecondPlatoon(second)
      setThirdPlatoon(third)
      setHQPlatoon(hq)
    }
    if(platoons.length == 1){
      platoons[0] == 0 ? setHQPlatoon(vics) :
      platoons[0] == 1 ? setFirstPlatoon(vics) :
      platoons[0] == 2 ? setSecondPlatoon(vics) :
      platoons[0] == 3 ? setThirdPlatoon(vics) :
      console.log('Error! Platoon not found')
    }
  },[])

  if(vics && hqPlatoon && uic){
    return(
      <>
        <h1>{uic}</h1>
        <div>
          {
            platoons.map(platoon => <div key={platoon}>{<h2>{platoon == 0 ? 'HQ' : `${platoon}`}</h2>}
            {
              platoon == 1 ? firstPlatoon.map(vic => <div key={vic.bumper_num}>
              <Vic key={vic.bumper_num} vic={vic}/>
            </div>) :
              platoon == 2 ? secondPlatoon.map(vic => <div key={vic.bumper_num}>
              <Vic key={vic.bumper_num} vic={vic}/>
            </div>) :
              platoon == 3 ? thirdPlatoon.map(vic => <div key={vic.bumper_num}>
              <Vic key={vic.bumper_num} vic={vic}/>
            </div>) :
              platoon == 0 ? <div>  { hqPlatoon.map(vic => <div key={vic.bumper_num}>
              <Vic key={vic.bumper_num} vic={vic}/>
            </div>) }</div>:
              <div>Error</div>
            }
            </div>)
          }
        </div>
      </>
    )
  } else if (vics && hqPlatoon){
    return (
      <>
        <div>
          {
            platoons.map(platoon => <div key={platoon}>{<h2>{platoon == 0 ? 'HQ' : `${platoon}`}</h2>}
            {
              platoon == 1 ? firstPlatoon.map(vic => <div key={vic.bumper_num}>
              <Vic key={vic.bumper_num} vic={vic}/>
            </div>) :
              platoon == 2 ? secondPlatoon.map(vic => <div key={vic.bumper_num}>
              <Vic key={vic.bumper_num} vic={vic}/>
            </div>) :
              platoon == 3 ? thirdPlatoon.map(vic => <div key={vic.bumper_num}>
              <Vic key={vic.bumper_num} vic={vic}/>
            </div>) :
              platoon == 0 ? <div>  { hqPlatoon.map(vic => <div key={vic.bumper_num}>
              <Vic key={vic.bumper_num} vic={vic}/>
            </div>) }</div>:
              <div>Error</div>
            }
            </div>)
          }
        </div>
      </>
    )
  } else {
    return(
      <>
        <h1>{`${uic}`}</h1>
      </>
    )
  }


}

export default Unit;