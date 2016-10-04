import * as React from 'react';
const s = require('./style.css');
import { Album } from '../../components';

class AlbumList extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = ({
      tracks: [],
    });

    this.handleClick = this.handleClick.bind(this);
    console.log('init Albumlist');
  }

  public handleClick( event ) {
    const id = event.currentTarget.dataset.id;
    console.log('Album was clicked: ', id);
    this.setState({
      searchTermTrackId: id,
    });
    // this.props.getTracks(this.state.searchTermTrackId);
  }

  public albums() {
    return this.props.albums.map((album) => {
      return (
        <Album key={album.id} album={album} getTracks={this.props.getTracks} />
      );
    });
  }

  public render() {
    return (
      <div className="col-md-4">
        <ul className={s.albumlist}>
          {this.albums()}
        </ul>
      </div>
    );
  }

    public static propTypes = {
      albums: React.PropTypes.array.isRequired,
      getTracks: React.PropTypes.func.isRequired,
    };
}

export { AlbumList };
