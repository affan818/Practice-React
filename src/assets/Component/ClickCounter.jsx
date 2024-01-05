
import React from 'react'
import hoc2 from './HOC'

const ClickCounter = (props) => {
  const {count , incree , name} = props
  return (
   <div>
     <button onClick={incree}> ClickCounter: {count}</button> 

   </div>
  )
}

export default hoc2(ClickCounter)

