import { expect } from 'chai';
import { renderComponent } from '../../helpers/TestHelper';
import { Search } from './index';

describe('<Search />', () => {

  const component = renderComponent(Search);

  it('Renders with correct style', () => {
    const s = require('./style.css');
    expect(component.find(s.about)).to.exist;
  });

  it('Renders header with text', () => {
    expect(component.find('h4').text()).to.eql('Search');
  });

});
