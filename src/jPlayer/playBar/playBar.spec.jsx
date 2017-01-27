import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import { classes } from '../../util/constants';
import PlayBar from './playBar';

const setup = () => {
  const props = {
    currentPercentAbsolute: 20,
    currentPercentRelative: 30,
    children: (<i className="fa fa-play" />),
    'data-attribute-test': 'test',
  };

  const wrapper = shallow(<PlayBar {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('<PlayBar />', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    ({ wrapper, props } = setup());
  });

  it('renders self and subcomponents', () => {
    const playBar = wrapper.dive();

    expect(playBar.prop('style').width).toBe(`${props.currentPercentRelative}%`);
    expect(playBar.prop('children')).toBe(props.children);
    expect(playBar.hasClass(classes.PLAY_BAR)).toBeTruthy();
    expect(playBar.prop('data-attribute-test')).toBe(props['data-attribute-test']);
  });

  it('width is currentPercentAbsolute when smoothPlayBar', () => {
    wrapper.setProps({ smoothPlayBar: true });
    expect(wrapper.dive().prop('style').width).toBe(`${props.currentPercentAbsolute}%`);
  });
});
