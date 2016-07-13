import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import WidgetSuggestions from '../../source/assets/js/react/components/widget-suggestions.jsx';

describe('BDD - React - WidgetSuggestions', () => {
  it('is a React element', function() {
    let validation = ReactTestUtils.isElement(
      <WidgetSuggestions />
    );

    expect(validation).to.be.ok;
  });

  it('is a WidgetSuggestions React element', function() {
    let validation = ReactTestUtils.isElementOfType(
      <WidgetSuggestions />,
      WidgetSuggestions
    );

    expect(validation).to.be.ok;
  });

  describe('rendered into DOM', function() {
    let component = ReactTestUtils.renderIntoDocument(<WidgetSuggestions />);

    it('is not a DOM component', function() {
      let validation = ReactTestUtils.isDOMComponent(component);

      expect(validation).to.not.be.ok;
    });

    it('is a composite component', function() {
      let validation = ReactTestUtils.isCompositeComponent(component);

      expect(validation).to.be.ok;
    });

    it('is a composite WidgetSuggestions component', function() {
      let validation = ReactTestUtils.isCompositeComponentWithType(component, WidgetSuggestions);

      expect(validation).to.be.ok;
    });
  });
});
