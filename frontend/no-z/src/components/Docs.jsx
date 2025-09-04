

function Docs({ type }) {

  return (
    <>
      <a href={`https://armypubs.army.mil/`}><p>{`${type}`} TM</p></a>
      <a href={`https://armypubs.army.mil/`}><p>JBC-P TM</p></a>
      <a href={`https://armypubs.army.mil/`}><p>SINCGARS TM</p></a>
      <a href={`https://armypubs.army.mil/`}><p>Gunnery Tables TCS</p></a>
    </>
  )
}

export default Docs;