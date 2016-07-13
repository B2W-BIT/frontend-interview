import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import ProfileNumbers from '../../source/assets/js/react/components/profile-numbers.jsx';

describe('BDD - React - ProfileNumbers', () => {
  it('is a React element', function() {
    let validation = ReactTestUtils.isElement(
      <ProfileNumbers />
    );

    expect(validation).to.be.ok;
  });

  it('is a ProfileNumbers React element', function() {
    let validation = ReactTestUtils.isElementOfType(
      <ProfileNumbers />,
      ProfileNumbers
    );

    expect(validation).to.be.ok;
  });

  describe('rendered into DOM', function() {
    let component = ReactTestUtils.renderIntoDocument(<ProfileNumbers />);

    it('is not a DOM component', function() {
      let validation = ReactTestUtils.isDOMComponent(component);

      expect(validation).to.not.be.ok;
    });

    it('is a composite component', function() {
      let validation = ReactTestUtils.isCompositeComponent(component);

      expect(validation).to.be.ok;
    });

    it('is a composite ProfileNumbers component', function() {
      let validation = ReactTestUtils.isCompositeComponentWithType(component, ProfileNumbers);

      expect(validation).to.be.ok;
    });
  });
});
