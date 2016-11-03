'use strict';

import React from 'react';

require('styles/CommentToPostItem.css');

class CommentToPostItemComponent extends React.Component {
  //#region constructors
  constructor(props) {
    super(props);
  }
  //#endregion constructors

  //#region events
  render() {
    var self = this;
    return (
      <div className="commenttopostitem-component">
        <div>Name: {self.props.name}</div>
        <div>Email: {self.props.email}</div>
        <div>Comment: {self.props.body}</div>
      </div>
    );
  }
  //#endregion events
}

CommentToPostItemComponent.displayName = 'CommentToPostItemComponent';

// Uncomment properties you need
// CommentToPostItemComponent.propTypes = {};
// CommentToPostItemComponent.defaultProps = {};

export default CommentToPostItemComponent;
