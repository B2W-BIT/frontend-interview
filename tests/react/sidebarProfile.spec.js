import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import SidebarProfile from '../../source/assets/js/react/components/sidebar-profile.jsx';

describe('BDD - React - SidebarProfile', () => {
  it('is a React element', function() {
    let validation = ReactTestUtils.isElement(
      <SidebarProfile />
    );

    expect(validation).to.be.ok;
  });

  it('is a SidebarProfile React element', function() {
    let validation = ReactTestUtils.isElementOfType(
      <SidebarProfile />,
      SidebarProfile
    );

    expect(validation).to.be.ok;
  });

  describe('rendered into DOM', function() {
    let component = ReactTestUtils.renderIntoDocument(<SidebarProfile />);

    it('is not a DOM component', function() {
      let validation = ReactTestUtils.isDOMComponent(component);

      expect(validation).to.not.be.ok;
    });

    it('is a composite component', function() {
      let validation = ReactTestUtils.isCompositeComponent(component);

      expect(validation).to.be.ok;
    });

    it('is a composite SidebarProfile component', function() {
      let validation = ReactTestUtils.isCompositeComponentWithType(component, SidebarProfile);

      expect(validation).to.be.ok;
    });
  });
});
