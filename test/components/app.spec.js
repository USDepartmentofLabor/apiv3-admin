import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
// import sinon from 'sinon';

import App from '../../client/components/App.jsx';

describe('<App />', () => {
  it('renders one header', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("h1")).to.have.length(1);
  });
});
