import * as React from 'react';

class Footer extends React.Component<any, any> {
  public render() {
    const s = require('./style.css');

    return (
      <footer className={s.footer}>
        <p>© Copyright 2016 SearchSpotifySearch!</p>
      </footer>
    );
  }
}

export { Footer }
