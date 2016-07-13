import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import Timeline from '../../source/assets/js/react/components/timeline.jsx';

describe('BDD - React - Timeline', () => {
  it('is a React element', function() {
    let validation = ReactTestUtils.isElement(
      <Timeline />
    );

    expect(validation).to.be.ok;
  });

  it('is a Timeline React element', function() {
    let validation = ReactTestUtils.isElementOfType(
      <Timeline />,
      Timeline
    );

    expect(validation).to.be.ok;
  });

  describe('rendered into DOM', function() {
    let component = ReactTestUtils.renderIntoDocument(<Timeline />);

    it('is not a DOM component', function() {
      let validation = ReactTestUtils.isDOMComponent(component);

      expect(validation).to.not.be.ok;
    });

    it('is a composite component', function() {
      let validation = ReactTestUtils.isCompositeComponent(component);

      expect(validation).to.be.ok;
    });

    it('is a composite Timeline component', function() {
      let validation = ReactTestUtils.isCompositeComponentWithType(component, Timeline);

      expect(validation).to.be.ok;
    });
  });
});
