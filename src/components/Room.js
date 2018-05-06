// shows individual room
import React from 'react'

// calculate room dimensions from the given co-ordinates - top, left, width, height
function _calculateDimensions(start_point, end_point) {
  // we can calculate stuffs based on the given co-ords
  let top = end_point[0] + "px"
  let left = start_point[0] + "px"
  let width = Math.abs(start_point[0] - start_point[1]) + "px"
  let height = Math.abs(end_point[1] - end_point[2]) + "px"

  return {
    top,
    left,
    width,
    height
  }
}

const Room = (props) => (
  <div className="flexi room"
    style={_calculateDimensions(props.start_point, props.end_point)}
  >
    {props.room_name}
  </div>
)

export default Room