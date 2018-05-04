// installation screen 
import React from 'react'

import bg from '../img/bg.png'

// import trackers data
import tracker_data from '../data/trackers.json'

// import tracker component
import Tracker from './Tracker'

// helper function to render tracker data
function _renderTrackers() {
  return tracker_data.map((t) => <Tracker key={t.tracker_id} {...t} />)
}

const InstallationScreen = (props) => (
  <div className='flexi screen'>
    <img className="flexi" src={bg} alt="installation room scren" />
    {props.showTrackers ? _renderTrackers() : null}
  </div>
)

export default InstallationScreen