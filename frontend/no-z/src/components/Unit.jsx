import Vic from './Vic.jsx'


function Unit({ vics, uic, allVics, unit }) {

  if(vics){
    return(
      <>
        <h1>{`${unit.uic}`}</h1>
        <div>
          {
            vics.map(vic => <div key={vic.bumper_num}>
              <Vic key={vic.bumper_num} vic={vic}/>
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