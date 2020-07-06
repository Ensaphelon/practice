import { connect } from 'react-redux';

import { loadPosts as loadPostsAction } from 'store/posts/actions';

const PostsContainer = ({ posts, isLoading, loadPosts, children }) => {
  return children({ posts, isLoading, loadPosts });
};

const mapStateToProps = state => ({
  posts: state.posts.data,
  isLoading: state.posts.isLoading,
});

const mapDispatchToProps = dispatch => ({
  loadPosts: loadPostsAction(dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostsContainer);
