import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import Header from '../../source/assets/js/react/components/header.jsx';

describe('BDD - React - Header', () => {
  it('is a React element', function() {
    let validation = ReactTestUtils.isElement(
      <Header />
    );

    expect(validation).to.be.ok;
  });

  it('is a Header React element', function() {
    let validation = ReactTestUtils.isElementOfType(
      <Header />,
      Header
    );

    expect(validation).to.be.ok;
  });

  describe('rendered into DOM', function() {
    let component = ReactTestUtils.renderIntoDocument(<Header />);

    it('is not a DOM component', function() {
      let validation = ReactTestUtils.isDOMComponent(component);

      expect(validation).to.not.be.ok;
    });

    it('is a composite component', function() {
      let validation = ReactTestUtils.isCompositeComponent(component);

      expect(validation).to.be.ok;
    });

    it('is a composite Header component', function() {
      let validation = ReactTestUtils.isCompositeComponentWithType(component, Header);

      expect(validation).to.be.ok;
    });
  });
});
