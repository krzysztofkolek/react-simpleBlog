'use strict';

import React from 'react';
import CommentToPostComponent from './CommentToPostComponent.js'

require('styles/PostsListItem.css');

class PostsListItemComponent extends React.Component {
  //#region constructor
  constructor(props) {
    super(props);
  }
  //#endregion constructor

  //#region methods
  renderView() {
    if(this.props.showComments)
    {
      return    <div>
              <div className="post-title" onClick={this.props.onTitleClick}>
                {this.props.title}
              </div>
              <div className="post-body">{this.props.body}</div>
              <div>
                <CommentToPostComponent postId={this.props.postId} />
              </div>
              </div>
    }
    return    <div>
              <div className="post-title" onClick={this.props.onTitleClick}>
                {this.props.title}
              </div>
              <div className="post-body">{this.props.body}</div>
              </div>


  }
  //#endregion methods

  //#region event
  render() {
    var self = this;
    return (
      <div className="postslistitem-component">
      {self.renderView()}
      </div>
    );
  }
  //#endregion event
}

PostsListItemComponent.displayName = 'PostsListItemComponent';

PostsListItemComponent.propTypes = {
  postId: React.PropTypes.number,
  title: React.PropTypes.string,
  body : React.PropTypes.string,
  onTitleClick: React.PropTypes.func
};

PostsListItemComponent.defaultProps = {
  postId: -1,
  title: "",
  body : "",
  onTitleClick: function(index){}
};

export default PostsListItemComponent;
