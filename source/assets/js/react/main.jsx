import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header.jsx';
import SidebarProfile from './components/sidebar-profile.jsx';
import Timeline from './components/timeline.jsx';
import SidebarWidgets from './components/sidebar-widgets.jsx';

const Challenge = () => (
  <div className="wrapper">
    <Header />
    <main className="content" role="main">
        <div className="container">
          <SidebarProfile />
          <Timeline />
          <SidebarWidgets />
        </div>
      </main>
  </div>
);

ReactDOM.render(<Challenge />, document.getElementById('app'));
