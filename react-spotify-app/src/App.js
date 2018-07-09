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
    const currentPlaylists = this.props.playlists.slice();
    const playlist_map = currentPlaylists.map((playlist, iter) => {
      const pStr = playlist.playlistName + ' | Songs: ' + playlist.playlistSongs.length;
      return (
        <p key={iter}> {pStr} </p>
      )
    })
    return(
      <div>
        {playlist_map}
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <div className='App App-header'>
        <h2> {this.props.userName}'s Profile </h2>
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: 'tmpName',
      playlists: [
        {
          playlistNum: 0,
          playlistName: 'tmpPlaylistName',
          playlistSongs: ['yoho', 'yolo']
        }        
      ]
    };
  }

  handleClick() {
    const currentPlaylist = this.state.playlists.slice();

    this.setState({
      playlists: currentPlaylist.concat([
        {
          playlistId: 1,
          playlistName: 'newList',
          playlistSongs: ['yolo', 'yoho']

        }
      ])
    }, () => {console.log(this.state)});
  }

  render() {
    return (
      <div className='content'>
        <Header userName = {this.state.userName} />
        <SearchBar/>
        <button onClick = {() => this.handleClick()}> Click Me</button>
        <Playlist playlists = {this.state.playlists}/>
      </div>
    );
  }
}

export default App;
