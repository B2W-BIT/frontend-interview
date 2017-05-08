import React from 'react';
import { Sidebar } from '../components/sidebar'
import renderer from 'react-test-renderer';

describe("Will test the sidebar component", () => {

    it('renders de cover photo nicely', () => {
      const props = {
          name: "",
          verified: "",
          screen_name: "",
          description: "",
          location: "",
          profile_image_url: "",
          url: "",
          friends_count: "",
          followers_count: "",
          created_at: "",
          followersYouKnow: () => "",
          mediaPosts: () => ""
      }
      const tree = renderer.create(
        <Sidebar { ...props } />
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });

})
