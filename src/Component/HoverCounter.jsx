import React from 'react'
import hoc2 from './HOC'

const HoverCounter = (props) => {
  const {count,incree} = props
  return (
    <div>
      <h1 onMouseOver={incree}> hover for increment:{count}</h1>
    </div>
  )
}

export default hoc2(HoverCounter)
