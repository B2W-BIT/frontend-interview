import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import ProfileCard from '../../source/assets/js/react/components/profile-card.jsx';

describe('BDD - React - ProfileCard', () => {
  it('is a React element', function() {
    let validation = ReactTestUtils.isElement(
      <ProfileCard />
    );

    expect(validation).to.be.ok;
  });

  it('is a ProfileCard React element', function() {
    let validation = ReactTestUtils.isElementOfType(
      <ProfileCard />,
      ProfileCard
    );

    expect(validation).to.be.ok;
  });

  describe('rendered into DOM', function() {
    let component = ReactTestUtils.renderIntoDocument(<ProfileCard />);

    it('is not a DOM component', function() {
      let validation = ReactTestUtils.isDOMComponent(component);

      expect(validation).to.not.be.ok;
    });

    it('is a composite component', function() {
      let validation = ReactTestUtils.isCompositeComponent(component);

      expect(validation).to.be.ok;
    });

    it('is a composite ProfileCard component', function() {
      let validation = ReactTestUtils.isCompositeComponentWithType(component, ProfileCard);

      expect(validation).to.be.ok;
    });
  });
});
