import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import ProfilePhotosVideos from '../../source/assets/js/react/components/profile-photos-videos.jsx';

describe('BDD - React - ProfilePhotosVideos', () => {
  it('is a React element', function() {
    let validation = ReactTestUtils.isElement(
      <ProfilePhotosVideos />
    );

    expect(validation).to.be.ok;
  });

  it('is a ProfilePhotosVideos React element', function() {
    let validation = ReactTestUtils.isElementOfType(
      <ProfilePhotosVideos />,
      ProfilePhotosVideos
    );

    expect(validation).to.be.ok;
  });

  describe('rendered into DOM', function() {
    let component = ReactTestUtils.renderIntoDocument(<ProfilePhotosVideos />);

    it('is not a DOM component', function() {
      let validation = ReactTestUtils.isDOMComponent(component);

      expect(validation).to.not.be.ok;
    });

    it('is a composite component', function() {
      let validation = ReactTestUtils.isCompositeComponent(component);

      expect(validation).to.be.ok;
    });

    it('is a composite ProfilePhotosVideos component', function() {
      let validation = ReactTestUtils.isCompositeComponentWithType(component, ProfilePhotosVideos);

      expect(validation).to.be.ok;
    });
  });
});
