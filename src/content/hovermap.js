import React, { Component } from 'react';
import {
    Map, GoogleApiWrapper, Marker,
} from 'google-maps-react';
import uuid from 'uuid';

const mapStyles = {
    width: '100%',
    height: '400px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    borderRadius: '3px',
};

// function arraysEqual(a, b) {
//     if (a === b) return true;
//     if (a == null || b == null) return false;
//     if (a.length !== b.length) return false;
//     for (let i = 0; i < a.length; i += 1) {
//         if (a[i] !== b[i]) return false;
//     }
//     return true;
// }

export class HoverMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeMarker: {}, // Shows the active marker upon click
            map: null,
        };
        this.onMarkerClick = this.onMarkerClick.bind(this);
        this.onClose = this.onClose.bind(this);
        this.setBounds = this.setBounds.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.name !== this.props.name) {
            this.setBounds();
        }
    }

    onMarkerClick(props, marker) {
        this.setState({
            activeMarker: marker,
        });
    }

    onClose() {
        this.setState({
            activeMarker: null,
        });
    }

    setBounds() {
        const bounds = new this.props.google.maps.LatLngBounds();
        bounds.extend(new this.props.google.maps.LatLng(this.props.lat, this.props.lng));
        if (this.state.map !== undefined && this.state.map !== null) {
            this.state.map.fitBounds(bounds);
        }
    }

    render() {
        return (
            <Map
                google={this.props.google}
                style={mapStyles}
                onReady={(props, map) => {
                    this.setState({ map });
                    this.setBounds();
                }}
                zoomControl={false}
                mapTypeControl={false}
                scaleControl={false}
                streetViewControl={false}
                rotateControl={false}
                fullscreenControl={false}
            >
                {this.props.map(
                        <Marker
                            onClick={this.onMarkerClick}
                            name={name}
                            position={new this.props.google.maps.LatLng(this.props.lat, this.props.lng)}
                            key={uuid.v4()}
                        />
                    )}
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyANvkYDq_yLEJVS0t_auv5afE8iHCuKnt8',
})(HoverMap);