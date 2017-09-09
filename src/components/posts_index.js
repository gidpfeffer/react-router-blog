import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions'
import _ from 'lodash';
import { Link } from 'react-router-dom';

class PostsIndex extends Component{
	componentDidMount(){
		this.props.fetchPosts();
	}

	renderPosts(){
		 return _.map(this.props.posts, post => {
			return(
				<li key={post.id}>
					<Link to={`/posts/${post.id}`}>
						{post.title}
					</Link>
				</li>
			);
		});
	}

	render(){
	    return (
	      <div>
	      	<div>
	      		<Link to="/new" className="btn btn-primary">
	      			Add a post
	      		</Link>
	      	</div>
	        <h1>Posts Index</h1>
	        <ul>
	        	{this.renderPosts()}
	        </ul>
	      </div>
	    );
  }
}

function mapStateToProps(state) {
	return { posts: state.posts }
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);