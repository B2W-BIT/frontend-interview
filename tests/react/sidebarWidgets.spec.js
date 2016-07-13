import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import SidebarWidgets from '../../source/assets/js/react/components/sidebar-widgets.jsx';

describe('BDD - React - SidebarWidgets', () => {
  it('is a React element', function() {
    let validation = ReactTestUtils.isElement(
      <SidebarWidgets />
    );

    expect(validation).to.be.ok;
  });

  it('is a SidebarWidgets React element', function() {
    let validation = ReactTestUtils.isElementOfType(
      <SidebarWidgets />,
      SidebarWidgets
    );

    expect(validation).to.be.ok;
  });

  describe('rendered into DOM', function() {
    let component = ReactTestUtils.renderIntoDocument(<SidebarWidgets />);

    it('is not a DOM component', function() {
      let validation = ReactTestUtils.isDOMComponent(component);

      expect(validation).to.not.be.ok;
    });

    it('is a composite component', function() {
      let validation = ReactTestUtils.isCompositeComponent(component);

      expect(validation).to.be.ok;
    });

    it('is a composite SidebarWidgets component', function() {
      let validation = ReactTestUtils.isCompositeComponentWithType(component, SidebarWidgets);

      expect(validation).to.be.ok;
    });
  });
});
