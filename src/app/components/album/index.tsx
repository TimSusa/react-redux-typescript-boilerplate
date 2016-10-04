import * as React from 'react';

const Album = (props) => {

  this.propTypes = {
    album: React.PropTypes.object.isRequired,
    getTracks: React.PropTypes.func.isRequired,
  };

  this.styles = {
    img: {
      marginBottom: '1em',
      width: '20rem',
    },
    li: {
      width: '100%',
      textAlign: 'center',
      listStyle: 'none',
    },
  };

  return (
    <li style={this.styles.li}>
      <img
        src={props.album.images[1].url}
        alt={props.album.name}
        style={this.styles.img}
        onClick={() => props.getTracks(props.album.id)}
      />
    </li>
  );
};

export { Album };
