import React from 'react'
import './PreviousWorkout.css'

const PreviousWorkout = (props) => (
  <h1 className="prevworkout">{props.workout}
    <span className="prevtime">{props.time}</span></h1>
)

export default PreviousWorkout
