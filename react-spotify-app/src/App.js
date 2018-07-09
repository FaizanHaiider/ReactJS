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
    return(
      <div>
        {/* add playlist name */}
        {/* preview songs */}
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
      userName: 'tmpName',
      playlists: [
        {
          playlist: {
            playlistId: 0,
            playlistName: 'tmpPlaylistName',
            playlistImgs: [],
          }        
        }
      ]
    };
  }

  updateState() {
    const currentPlaylist = this.state.playlists.slice();
    const newPlaylist = {
      playlistId: 1,
      playlistName: 'newList',
      playlistImgs: [],
    }

    this.setState({
      playlists: currentPlaylist.concat([
        {
          playlist: newPlaylist
        }
      ])
    })
    console.log(this.state)
  }

  render() {
    return (
      <div className='content'>
        <Header name = {this.state.userName} />
        <SearchBar/>
        <button onClick={this.updateState} />
        <p> {console.log(this.state)} </p>
        <p> {this.state.playlists.playlistName} </p>
      </div>
    );
  }
}

export default App;
