import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import ProfileFollowers from '../../source/assets/js/react/components/profile-followers.jsx';

describe('BDD - React - ProfileFollowers', () => {
  it('is a React element', function() {
    let validation = ReactTestUtils.isElement(
      <ProfileFollowers />
    );

    expect(validation).to.be.ok;
  });

  it('is a ProfileFollowers React element', function() {
    let validation = ReactTestUtils.isElementOfType(
      <ProfileFollowers />,
      ProfileFollowers
    );

    expect(validation).to.be.ok;
  });

  describe('rendered into DOM', function() {
    let component = ReactTestUtils.renderIntoDocument(<ProfileFollowers />);

    it('is not a DOM component', function() {
      let validation = ReactTestUtils.isDOMComponent(component);

      expect(validation).to.not.be.ok;
    });

    it('is a composite component', function() {
      let validation = ReactTestUtils.isCompositeComponent(component);

      expect(validation).to.be.ok;
    });

    it('is a composite ProfileFollowers component', function() {
      let validation = ReactTestUtils.isCompositeComponentWithType(component, ProfileFollowers);

      expect(validation).to.be.ok;
    });
  });
});
