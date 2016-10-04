import * as React from 'react';

class Footer extends React.Component<any, any> {
  public render() {
    const s = require('./style.css');

    return (
        <div className="row">
          <div className="col-sm-12">
            <footer className={s.footer}>
              <p>© Copyright 2016 SearchSpotifySearch!</p>
            </footer>
          </div>
        </div>
    );
  }
}

export { Footer }
