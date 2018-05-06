// main home compnent; holds controls and screen view
import React from 'react'

// import our components
import InstallationScreen from './InstallationScreen'

class Home extends React.Component {
  constructor(props) {
    super(props)
    // set the state
    this.state = {
      trackers: false,
      rooms: false
    }
  }

  render() {
    return (
      <div className="flexi" style={{flexDirection: 'column'}}>
        <div className='controls'>
          <div className='control'>
            <label>
              <input type="checkbox" checked={this.state.trackers} onChange={(e) => {
                this.setState({
                  trackers: e.target.checked
                })
              }} />
              Show Trackers
            </label>
          </div>
          <div className='control'>
            <label>
              <input type="checkbox" checked={this.state.rooms} onChange={(e) => {
                this.setState({
                  rooms: e.target.checked
                })
              }} />
              Show Rooms
            </label>
          </div>
        </div>
        <InstallationScreen 
          showTrackers={this.state.trackers}
          showRooms={this.state.rooms}
        />
      </div>
    )
  }
}

export default Home