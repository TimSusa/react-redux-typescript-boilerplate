import * as React from 'react';
const s = require('./style.css');
import * as musicApi from '../../api';
import { SearchBar, AlbumList, TrackList, Player } from '../../components';

class Search extends React.Component<any, any> {
  public currentPreview;
  constructor() {
    super();
    this.state = ({
      albums: [],
      tracks: [],
      currentPreview: null,
    });

    this.getAlbums = this.getAlbums.bind(this);
    this.processAlbums = this.processAlbums.bind(this);
    this.getTracks = this.getTracks.bind(this);
    this.processTracks = this.processTracks.bind(this);
    this.playPreview = this.playPreview.bind(this);
    this.currentPreview = null;
    console.log('init Search');
  }

  public getAlbums = (artist) => musicApi.getAlbums(artist, this.processAlbums)

  public processAlbums = (payload) => {
    console.log('payload: ', payload.albums.items);
    this.setState({
      albums: payload.albums.items,
      tracks: [],
    });
  }

  public getTracks = (albumId) => musicApi.getTracks(albumId, this.processTracks)

  public processTracks = (payload) => {
    console.log('payload tracks: ', payload.tracks.items);
    this.setState({
      tracks: payload.tracks.items,
    });
  }

  public playPreview(previewUrl) {
    if (this.currentPreview) {
      const curAudioObject = this.currentPreview;
      curAudioObject.pause();
    }
    const newAudioObject = new Audio(previewUrl);
    this.currentPreview = newAudioObject;
    newAudioObject.play();

    this.setState({
      currentPreview: this.currentPreview,
    });
  }

  public render() {
    return (
      <div className={s.about}>
        <h4>Search Artist:</h4>
        <SearchBar getAlbums={this.getAlbums} />
        <AlbumList albums={this.state.albums} getTracks={this.getTracks} />
        <TrackList tracks={this.state.tracks} playPreview={this.playPreview}/>
        <Player currentPreview={this.state.currentPreview}/>
      </div>
    );
  }
}

export { Search }
