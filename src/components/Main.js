require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import {PostsListComponent} from './PostsListComponent.js'

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
      <div id="blogTitle">Blog</div>
      <div id="postContainer">
        <PostsListComponent/>
      </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
