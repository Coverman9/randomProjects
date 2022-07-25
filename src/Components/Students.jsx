import React from 'react'

const Students = (props) => {
  
    return (
        <h3>
        Student: {props.name} {props.age} {!!props.gay && <span>who is gay</span>}
        </h3>
  )
}

export default Students
