import Followers from '../followers.jsx';
import React from 'react';
import renderer from 'react-test-renderer';

describe("Followers componen", () => {
  const followers = [{
    id: 0,
    profile_image_url: 'profile image url',
    screen_name: 'americanascom'
  }, {
    id: 1,
    profile_image_url: 'profile image url',
    screen_name: 'americanascom'
  }];

  it('should render the component', () => {
    const rendered = renderer.create(
      <Followers users={followers} />
    );

    expect(rendered.toJSON()).toMatchSnapshot();
  });
});