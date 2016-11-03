'use strict';

import React from 'react';
import axios from 'axios'
import CommentToPostItemComponent from './CommentToPostItemComponent'

require('styles/CommentToPost.css');

class CommentToPostComponent extends React.Component {
  //#region constructor
  constructor(props){
      super(props);

      this.state = {
          comments: []
      };
  }
  //#endregion constructor

  //#region methods
  renderView(comments) {
    return comments.map(function(comment){
           return <CommentToPostItemComponent name={comment.name}
                                       email={comment.email}
                                       body={comment.body}
                                       key={comment.id}
                                  />
                              });
  }
  //#endregion methods

  //#region events
  componentDidMount() {
    var self = this;
    this.serverRequest = axios.get('https://jsonplaceholder.typicode.com/comments?postId=' + self.props.postId)
                              .then(function(response) {
                                self.setState({
                                  comments: response.data
                                });
                              })
                              .catch(function(err) {
                                   console.log(error);
                              })
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }

  render() {
    var self = this;
    return (
      <div className="commenttopost-component">
        Coments
        {this.renderView(this.state.comments)}
      </div>
    );
  }
  //#endregion events
}

CommentToPostComponent.displayName = 'CommentToPostComponent';

CommentToPostComponent.propTypes = {
  postId: React.PropTypes.number
};

CommentToPostComponent.defaultProps = {
  postId: -1
};

export default CommentToPostComponent;
