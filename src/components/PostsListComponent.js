'use strict';

import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import PostsListItemComponent from './PostsListItemComponent.js'

require('styles/PostsList.css');


export class PostsListComponent extends React.Component {
  //#region constructor
  constructor(props){
      super(props);

      this.state = {
        posts:[],
        renderedPosts:[],
        blogTitleWasClicked: false,
        idOfClickedTitle: -1
      };
  }
  //#endregion constructor

  //#region methods
  onTitleClick(index) {
    console.log(index);
    this.setState({
      blogTitleWasClicked: true,
      idOfClickedTitle: index - 1
    });
  }

  renderView(posts) {
    var self = this;
    if(self.state.blogTitleWasClicked){
      var post = self.state.posts[self.state.idOfClickedTitle]
      return <PostsListItemComponent title={post.title} body={post.body}
                                     postId={post.id}
                                     onTitleClick={self.onTitleClick.bind(self, post.id)}
                                     showComments={true}
                                     key={post.id}
                                     />
    }
    return posts.map(function(post) {
      return <PostsListItemComponent title={post.title} body={post.body}
                                     postId={post.id}
                                     onTitleClick={self.onTitleClick.bind(self, post.id)}

                                     key={post.id}
                                     />
                                 });
  }
  //#endregion methods

  //#region events
  componentDidMount() {
    var self = this;
    this.serverRequest = axios.get('https://jsonplaceholder.typicode.com/posts')
                              .then(function (response) {
                                self.setState({
                                  posts: response.data
                                });
                              })
                              .catch(function (error) {
                                console.log(error);
                              });
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }

  render() {
    return (
      <div className="postslist-component">
        {this.renderView(this.state.posts)}
      </div>
    );
  }
  //#endregion events
}

PostsListComponent.displayName = 'PostsListComponent';

PostsListComponent.defaultProps = {};
