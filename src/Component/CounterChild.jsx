import React, { useContext } from 'react'
import { counter, incree } from '../../App'

const CounterChild = () => {
    const number = useContext(counter)
    const plus = useContext(incree)
  return (
    <div>
      <h1 onMouseLeave={plus} style={{backgroundColor:'antiquewhite'}}>mouse leave for increment :{number}</h1>
    </div>
  )
}

export default CounterChild


