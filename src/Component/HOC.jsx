import React, { useState } from 'react'

const hoc2 = (Wrap) => {
  const HOC = (props) => {
    const [count,setCount] = useState(0)
    const incree = () =>{
      setCount(count + 1)
    }
    return (
      <>
        <Wrap count = {count} incree = {incree} {...props} />
      </>
    )
  }
  return HOC
}
export default hoc2

