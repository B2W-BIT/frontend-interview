import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import MainMenu from '../../source/assets/js/react/components/main-menu.jsx';

describe('BDD - React - MainMenu', () => {
  it('is a React element', function() {
    let validation = ReactTestUtils.isElement(
      <MainMenu />
    );

    expect(validation).to.be.ok;
  });

  it('is a MainMenu React element', function() {
    let validation = ReactTestUtils.isElementOfType(
      <MainMenu />,
      MainMenu
    );

    expect(validation).to.be.ok;
  });

  describe('rendered into DOM', function() {
    let component = ReactTestUtils.renderIntoDocument(<MainMenu />);

    it('is not a DOM component', function() {
      let validation = ReactTestUtils.isDOMComponent(component);

      expect(validation).to.not.be.ok;
    });

    it('is a composite component', function() {
      let validation = ReactTestUtils.isCompositeComponent(component);

      expect(validation).to.be.ok;
    });

    it('is a composite MainMenu component', function() {
      let validation = ReactTestUtils.isCompositeComponentWithType(component, MainMenu);

      expect(validation).to.be.ok;
    });
  });
});
