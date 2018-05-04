// shows individual tracker
import React from 'react'

const Tracker = (props) => (
  <div className="flexi tracker circle"
    style={{
      top: props.x + 'px',
      left: props.y + 'px',
      zIndex: props.z
    }}
  >{props.tags}</div>
)

export default Tracker