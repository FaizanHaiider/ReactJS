import React, { Component } from 'react';
import "./css/App.css";

class SearchBar extends Component {
  render() {
    return (
      <div>
        <input type='text' onKeyUp={event => 
        this.props.onTextChange(event.target.value)} />
      </div>
    );
  }
}

class Playlist extends Component {
  render() {
    const playlist = this.props.playlist;
    const key = this.props.key;
    return(
      <div key = {key}>
        <p> {playlist.playlistName} </p>
      </div>
    );
  }
}


class Header extends Component {
  render() {
    const userName = this.props.name;
    return (
      <div className="App App-header">
        <h2> {userName}'s Profile </h2>
      </div>
    );
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'tmpName',
      playlists: [{
        playlistId: 0,
        playlistName: 'tmpPlaylistName',
        playlistImgs: [],
        playlistSongs: [{
          songName: 'tmpSongName',
          songDuration: 0.00
        }]
      }]
    };
  }

  updateState() {
    const playlistsCopy = this.state.playlists.slice();
    this.setState({
      playlists: playlistsCopy.concat([
        {
          playlistName: 'tmpPlaylistName2',
          playlistImgs: [],
          playlistSongs: [{
            songName: 'tmpSongName',
            songDuration: 0.00
          }]
        }
      ])
    })
    console.log(this.state)
  }

  render() {
    const playlists = this.state.playlists;
    return (
      <div className='content'>
        <Header name = {this.state.name} />
        <SearchBar/>
        {this.updateState}
        {
          playlists.map(playlist => <Playlist 
            key = {playlist.key}
            playlist = {playlist} />)
        }
      </div>
    );
  }
}

export default App;
