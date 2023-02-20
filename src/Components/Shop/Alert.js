import React from 'react'
const Alert = ({alert}) => {
  return (
    <div style={{height: '50px', positon: "relative", zIndex: '10'}}>
      {alert && <div  style={{background:"green"}}>
        <strong> Alert </strong> : <h2>Item Added to the Cart</h2>
    </div>}
    </div>
  )
}
export default Alert
