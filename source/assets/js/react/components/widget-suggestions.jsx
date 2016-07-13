import React, { Component, PropTypes } from 'react';
import MakeRequestJson from '../utils/request';
import { stringShortener } from '../utils/miscellaneous';

export default class WidgetSuggestions extends Component {

  constructor(props) {
    super(props);

    this.state = {data: []};
    this._generateItem = this._generateItem.bind(this);
  }

  componentDidMount() {
    let me = this;

    MakeRequestJson({ url: '/1.1/users/suggestions/governo.json'}).then((data) => {
      me.setState({
        data: data.users
      });
    });
  }

  _generateItem(item, index) {
    return (
      <li className="widgetWhoToFollow-item" key={index}>
        <img className="widgetWhoToFollow-image" src={item.profile_image_url} alt="" width="48" height="48" />
        <a className="widgetWhoToFollow-link">
          <strong className="widgetWhoToFollow-fullname">{item.name}</strong>
          <span className="widgetWhoToFollow-username">@{stringShortener(item.screen_name)}</span>
        </a>
        <button className="widgetWhoToFollow-follow" type="button">
          <svg className="userActions-icon" width="17" height="11" viewBox="0 0 100 70"><g fillRule="evenodd" clipRule="evenodd"><path d="M56.688 19.478c1.667.397 2.206 1.7 2.306 3.07.298 4.08-1.07 7.58-4.132 10.374-.306.28-.72.568-1.11.607-.743.074-.94.53-1.167 1.102-1.66 4.21-3.928 8.05-7.244 11.205-2.19 2.083-4.74 3.382-7.894 3.145-2.185-.164-3.995-1.126-5.602-2.55-3.667-3.25-6.18-7.263-7.98-11.752-.233-.578-.62-.864-1.194-1.2-1.078-.633-2.11-1.506-2.847-2.506-1.457-1.976-2.33-4.244-2.542-6.716-.117-1.375.264-2.635 1.015-3.782.156-.238.386-.54.63-.592.992-.21.97-.952 1.048-1.694.402-3.766 1.372-7.37 3.25-10.69 1.29-2.277 3.087-3.946 5.808-4.4.178-.03.375-.103.506-.22C31.33 1.298 33.506.567 35.82.233c3.37-.487 6.692-.215 9.937.85 2.813.92 4.78 2.915 6.517 5.15 2.614 3.365 3.884 7.24 4.217 11.445.048.582.127 1.16.198 1.8z"/><path d="M38.233 70H2.783C1.106 70 .848 69.807.5 68.185c-.622-2.9-.707-5.816-.012-8.707.666-2.767 2.36-4.714 5.15-5.528 3.86-1.124 7.738-2.19 11.628-3.2 2.335-.606 4.712-1.052 7.066-1.585.537-.122.875.006 1.212.473 1.86 2.577 3.995 4.89 6.843 6.433 4.503 2.44 8.83 1.923 12.97-.877 2.202-1.488 3.97-3.42 5.548-5.53.27-.358.512-.66 1.043-.525 6.18 1.576 12.373 3.11 18.542 4.73 3.082.808 4.772 2.974 5.522 5.967.792 3.16.596 6.28-.345 9.368-.073.237-.334.517-.568.59-.452.14-.944.2-1.42.202-11.814.007-23.63.005-35.447.005zM79.924 36.482c-2.643 0-5.193.016-7.743-.006-1.49-.013-2.646-.672-3.35-1.98-1.248-2.32-.228-6.252 3.62-6.198 2.394.034 4.79 0 7.184-.005.05 0 .102-.025.29-.074 0-.27-.002-.574.002-.88.03-2.182-.055-4.374.124-6.545.186-2.252 2.12-3.663 4.472-3.516 2.095.13 3.72 1.818 3.756 3.97.034 2.025.008 4.05.008 6.077v.978h.922c2.233 0 4.467-.01 6.7.002 2.495.012 4.107 1.658 4.093 4.156-.013 2.286-1.768 4.01-4.1 4.018-2.498.008-4.997.003-7.614.003v.89c0 2 .01 3.997-.003 5.996-.014 2.03-1.288 3.614-3.307 4.068-1.952.44-3.617-.474-4.603-2.28-.35-.64-.41-1.482-.43-2.235-.055-2.104-.02-4.21-.02-6.44z"/></g></svg>
          <span>Follow</span>
        </button>
        <button className="widgetWhoToFollow-close" type="button">
          <svg className="widgetWhoToFollow-close-icon" width="10" height="10" viewBox="0 0 100 100"><path fillRule="evenodd" clipRule="evenodd" d="M37.51 49.53c-1.973-1.76-3.964-3.372-5.77-5.17-9.537-9.507-19.028-19.062-28.536-28.597-3.963-3.975-4.263-9.336-.72-12.99 3.666-3.78 9.176-3.716 13.244.32 10.754 10.672 21.447 21.404 32.167 32.11.674.673 1.38 1.315 2.18 2.078 4.56-4.538 9.016-8.956 13.452-13.395C70.415 16.99 77.28 10.073 84.17 3.182 87.45-.095 91.028-.82 94.78.962c5.72 2.722 6.964 9.722 2.463 14.452-3.357 3.528-6.875 6.905-10.322 10.35-7.395 7.39-14.792 14.777-22.183 22.17-.616.617-1.2 1.265-1.913 2.018.593.653 1.09 1.25 1.635 1.795 10.775 10.775 21.55 21.55 32.34 32.313 4.057 4.05 4.286 9.45.52 13.18-3.857 3.823-9.016 3.68-13.157-.46-10.65-10.648-21.27-21.33-31.905-31.994-.68-.68-1.39-1.33-2.196-2.097-.792.752-1.496 1.397-2.17 2.07-10.847 10.83-21.67 21.682-32.545 32.484-3.194 3.172-7.852 3.624-11.137 1.266C.34 95.734-1.044 91.367.814 87.308c.497-1.087 1.36-2.058 2.218-2.92 10.928-11 21.887-21.968 32.832-32.948.426-.427.79-.91 1.646-1.91z"/></svg>
        </button>
      </li>
    );
  }

  render() {
    let items = this.state.data.map(this._generateItem).filter(function(item, index){
      return index < 3;
    });
    return (
      <section className="widgetWhoToFollow">
        <header className="widgetWhoToFollow-header">
          <h3 className="widgetWhoToFollow-header-title">Who to follow</h3>
          <button className="widgetWhoToFollow-header-link" type="button">Refresh</button>
          <button className="widgetWhoToFollow-header-link" type="button">View all</button>
        </header>
        <div className="widgetWhoToFollow-body">
          <ul className="widgetWhoToFollow-list">
            {items}
          </ul>
        </div>
        <footer className="widgetWhoToFollow-footer">
          <p><a className="widgetWhoToFollow-footer-link">Find friends</a></p>
        </footer>
      </section>
    );
  }
}
