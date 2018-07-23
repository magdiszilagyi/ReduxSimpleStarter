import React, {Component} from 'react';

class GoogleMap extends Component {
    componentDidMount() {
        console.log(this.props.lat);
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lng
            }
        });
    }

    render() {
        //this.refs.map
        return <div ref="map" />;
    }

}

export default GoogleMap;