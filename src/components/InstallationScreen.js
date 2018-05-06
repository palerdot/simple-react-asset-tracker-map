// installation screen 
import React from 'react'

import bg from '../img/bg.png'

// import data
import tracker_data from '../data/trackers.json'
import room_data from '../data/rooms.json'

// import components
import Tracker from './Tracker'
import Room from './Room'

// helper function to render tracker data
function _renderTrackers() {
  return tracker_data.map((t) => <Tracker key={t.tracker_id} {...t} />)
}

// helper function to render rooms
function _renderRooms() {
  return room_data.map((r) => <Room key={r.room_id} {...r} />)
}

const InstallationScreen = (props) => (
  <div className='flexi screen'>
    <img className="flexi" src={bg} alt="installation room scren" />
    {props.showTrackers ? _renderTrackers() : null}
    {props.showRooms ? _renderRooms() : null}
  </div>
)

export default InstallationScreen