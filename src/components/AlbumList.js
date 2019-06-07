import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './Albumdetail';


 class AlbumList extends Component {

    state = { albums: [] };

    // componentWillMount method Automatically called as soon ap renderd on screen
    componentWillMount() {
        axios.get('http://rallycoding.herokuapp.com/api/music_albums')
        .then(response => this.setState({ albums: response.data }));
    }
            renderAlbums() {
                return this.state.albums.map(album =>
                     <AlbumDetail /*key for the uniqueness here album title is unique usually we can use id */key={album.title}  /*passing the  props */ album={album} />);
          
                // returns the array of album title 
                /* our federal function we called five
                times one for each album that we've loaded whatever 
                we returned from that function will be entered into 
                a new array that gets returned from the map function. */
            }

    render() {
        console.log(this.state);

        return (
            <View>
               {this.renderAlbums()}
            </View>
        );
    }
}

export default AlbumList; 
