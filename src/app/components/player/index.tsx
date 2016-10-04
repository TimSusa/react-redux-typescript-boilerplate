import * as React from 'react';
const s = require('./style.css');

class Player extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = ({
      selectedTrack: [],
      trackIsStopped: false,
    });
    this.handleClick = this.handleClick.bind(this);
    console.log('init Player: ', this.state );
  }

  public handleClick() {
    this.props.currentPreview.pause();
  }

  public getButton() {
    if (this.props.currentPreview) {
      return (
        <button type="button" className="btn btn-default btn-lg" onClick={this.handleClick}>
          <span className="glyphicon glyphicon-stop" aria-hidden="true"></span> Stop
        </button>
      );
    }
  }

  public render() {
    return (
      <div className="col-md-4">
        <div className={s.player}></div>
        <img src="http://placehold.it/350x150" />
        {this.getButton()}
      </div>
    );
  }
}

export { Player };
