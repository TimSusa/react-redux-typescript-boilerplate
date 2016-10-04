import * as React from 'react';

const mouseOverColor = '#ADD8E6';
const mouseOutColor = 'white';

const Track = (props) => {
  this.propTypes = {
    track: React.PropTypes.object.isRequired,
    playPreview: React.PropTypes.func.isRequired,
  };

  this.styles = {
    li: {
      fontSize: '1em',
      padding: '0.2em',
      listStyleType: 'none',
      backgroundColor: mouseOutColor,
    },
  };

  this.handleMouseOver = (e) => {
    e.target.style.backgroundColor = mouseOverColor;
  };

  this.handleMouseOut = (e) => {
    e.target.style.backgroundColor = mouseOutColor;
  };

  this.handleMouseClick =  () => {
    console.log('preview track');
    props.playPreview(props.track.preview_url);
  };

  return (
    <li
      style={this.styles.li}
      onMouseOver={this.handleMouseOver}
      onMouseOut={this.handleMouseOut}
      onClick={this.handleMouseClick}
    >
      {props.track.name}
    </li>
  );
};

export { Track };
