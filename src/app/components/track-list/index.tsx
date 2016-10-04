import * as React from 'react';
// const s = require('./style.css');
import { Track } from '../../components';

const TrackList = (props) => {
  const tracks = props.tracks.map((track) => <Track key={track.id} track={track} playPreview={props.playPreview} />);

  this.propTypes = {
    tracks: React.PropTypes.array.isRequired,
    playPreview: React.PropTypes.func.isRequired,
  };

  return (
    <div className="col-md-4">
      <ul style={{ listStyle: 'none' }}>
        {tracks}
      </ul>
    </div>
  );
};

export { TrackList };
