const appConfig = require('../../../../config/main');
import * as React from 'react';
import * as Helmet from 'react-helmet';
import { Header, Footer } from '../../components';

class App extends React.Component<any, any> {
  public render() {
    const s = require('./style.css');

    return (
      <div >
        <section className={s.appContainer}>
          <Helmet {...appConfig.app} {...appConfig.app.head}/>
          <Header />
          <div className="container-fluid">
            {this.props.children}
          </div>
          <Footer />
        </section>

      </div>
    );
  }
}

export { App }
