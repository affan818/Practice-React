import React, { useReducer } from 'react'
const initialState = 0
const counter = (state,action) => {
  switch(action){
    case '++':
      return state + 1;
      case '--':
        return state - 1;
        case '00':
        return initialState
        default:
          return state
  }
}
const Reducer = () => {
  const [count,dispatch] = useReducer(counter,initialState)
  return (
    <div>
      <h1>num:{count}</h1>
      <button onClick={()=>dispatch('++')}>(+)</button>
      <button onClick={()=>dispatch('--')}>(--)</button>
      <button onClick={()=> dispatch('00')}>(0)</button>
    </div>
  )
}

export default Reducer

