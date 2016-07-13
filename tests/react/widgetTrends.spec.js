import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import WidgetTrends from '../../source/assets/js/react/components/widget-trends.jsx';

describe('BDD - React - WidgetTrends', () => {
  it('is a React element', function() {
    let validation = ReactTestUtils.isElement(
      <WidgetTrends />
    );

    expect(validation).to.be.ok;
  });

  it('is a WidgetTrends React element', function() {
    let validation = ReactTestUtils.isElementOfType(
      <WidgetTrends />,
      WidgetTrends
    );

    expect(validation).to.be.ok;
  });

  describe('rendered into DOM', function() {
    let component = ReactTestUtils.renderIntoDocument(<WidgetTrends />);

    it('is not a DOM component', function() {
      let validation = ReactTestUtils.isDOMComponent(component);

      expect(validation).to.not.be.ok;
    });

    it('is a composite component', function() {
      let validation = ReactTestUtils.isCompositeComponent(component);

      expect(validation).to.be.ok;
    });

    it('is a composite WidgetTrends component', function() {
      let validation = ReactTestUtils.isCompositeComponentWithType(component, WidgetTrends);

      expect(validation).to.be.ok;
    });
  });
});
