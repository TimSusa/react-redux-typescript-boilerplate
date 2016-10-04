import * as React from 'react';
const s = require('./style.css');

class SearchBar extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  public handleInputChange(event) {
    this.setState({
      searchTerm: event.target.value,
    });
  }

  public handleKeyPress(event) {
      if (event.key === 'Enter') {
        this.props.getAlbums(this.state.searchTerm);
      }
    }

  public render() {
    return (
      <div className={s.searchBarWrapper}>
        <input onChange={this.handleInputChange}
               placeholder="Search Artist here!"
               onKeyPress={this.handleKeyPress} />
      </div>
  );
  }

  public static propTypes = {
    getAlbums: React.PropTypes.func.isRequired,
  };
};

export { SearchBar };
