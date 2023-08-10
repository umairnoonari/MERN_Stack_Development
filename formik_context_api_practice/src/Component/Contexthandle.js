import React, { useState } from 'react'
import H from './H'
const Contexthandle = (props) => {
  const [count,setCount]=useState(0)
  function Increment(num)
  {
     setCount(count+num)
  }
  return (
    <H.Provider value={{Username:"Umair Ahmed",Increment,count}}>
        {props.children}
    </H.Provider>
  )
}

export default Contexthandle
