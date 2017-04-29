import React, {Component} from 'react';
import {connect} from 'react-redux';

class Timeline extends Component {
    render () {
        if(this.props.posts) {
            const posts = this.props.posts.map(postsFull => 
                <span key={postsFull.post.id}>{postsFull.post.text}</span>            
            );
            return (
                <div>
                    {posts}
                </div>
            )
        } else {
            return null;
        }
    }
}


function mapStateToProps(state){
    console.log(state);
    return{
        posts: state
    }
}

export default connect(mapStateToProps, null)(Timeline);