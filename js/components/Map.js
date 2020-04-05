import React from 'react'
import GoogleMapReact from 'google-map-react'

export default class Map extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            center: { lat: 40.73, lng: -73.93 },
            zoom: 12
        }
    }

    render() {
        return (
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{
                        key: 'AIzaSyCCiCnNy4_B7ZadX2DhCxSVNqCmADRt2EA',
                        language: 'en'
                    }
                    }
                    // defaultCenter={this.props.center}
                    center={this.state.center}
                    zoom={this.state.zoom}
                    // onChildMouseEnter={this.onChildMouseEnter}
                    // onChildMouseLeave={this.onChildMouseLeave}
                ></GoogleMapReact >
            </div >
        )
    }
}