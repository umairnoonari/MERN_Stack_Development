import React, { useState } from 'react'

const Counter = (props) => {
  const [count,setCount]=useState(0)
  function IncNumber()
  {
    setCount(count+1)
  }
  function DecNumber()
  {
     setCount(count-1)
  }
  return (
    <>
      {props.render(count,IncNumber,DecNumber)}
    </>
  )
}

export default Counter
