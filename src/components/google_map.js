import React , { Component } from 'react';

class GoogleMap extends Component {

    /*
    * This is a lifecycle method that is invoked after the 
    * component is rendered to the screen.
    */
    componentDidMount() {
        /*we could call new google.maps.map as the script for 
        * google map is included in scripts tag in index.html.
        * it will be rendered in the ref="map" that is returned by the 
        * render method. 
        * This how we make 3rd party apps/lib to work with react.
        */
        new google.maps.Map(this.refs.map, {
            zoom:12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }

    render() {
        //the returned value can be referenced as "this.refs.map"
        return <div ref="map" />;
    }
}

export default GoogleMap;