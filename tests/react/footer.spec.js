import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import Footer from '../../source/assets/js/react/components/footer.jsx';

describe('BDD - React - Footer', () => {
  it('is a React element', function() {
    let validation = ReactTestUtils.isElement(
      <Footer />
    );

    expect(validation).to.be.ok;
  });

  it('is a Footer React element', function() {
    let validation = ReactTestUtils.isElementOfType(
      <Footer />,
      Footer
    );

    expect(validation).to.be.ok;
  });

  describe('rendered into DOM', function() {
    let component = ReactTestUtils.renderIntoDocument(<Footer />);

    it('is not a DOM component', function() {
      let validation = ReactTestUtils.isDOMComponent(component);

      expect(validation).to.not.be.ok;
    });

    it('is a composite component', function() {
      let validation = ReactTestUtils.isCompositeComponent(component);

      expect(validation).to.be.ok;
    });

    it('is a composite Footer component', function() {
      let validation = ReactTestUtils.isCompositeComponentWithType(component, Footer);

      expect(validation).to.be.ok;
    });
  });
});
