import React, { Component, PropTypes } from 'react';
import WidgetTrends from './widget-trends.jsx';
import WidgetSuggestions from './widget-suggestions.jsx';
import Footer from './footer.jsx';

export default class SidebarrWidgets extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
      <aside className="sidebarWidgets">
        <WidgetSuggestions />
        <WidgetTrends />
        <Footer />
      </aside>
    );
  }
}
