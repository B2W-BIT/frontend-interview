import Tweets from '../tweets.jsx';
import React from 'react';
import renderer from 'react-test-renderer';

describe("Tweets componen", () => {
  const profile = {
    profile_image_url: 'profile image url',
    name: 'americanas.com',
    screen_name: 'americanascom'
  };

  const tweets = [
    {
      id: 1,
      user: profile,
      text: 'First tweet text message'
    }, {
      id: 2,
      user: profile,
      text: 'Second tweet text message'
    }
  ];

  it('should render the component', () => {
    const rendered = renderer.create(
      <Tweets tweets={tweets} />
    );

    expect(rendered.toJSON()).toMatchSnapshot();
  });
});