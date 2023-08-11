import React from 'react'
import Context from './Context'
const Notestate = (props) => {
 
  return (
    <div>
      <Context.Provider value={"Umair Ahmed"}>
        {props.children}
      </Context.Provider>
    </div>
  )
}

export default Notestate
