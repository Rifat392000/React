import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../features/posts/postsSlice";

export default function Posts() {
  const { posts, isLoading, isError, error } = useSelector(state => state.posts);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  let content;

  if (isLoading) {
    content = <h1>Loading posts ...</h1>;
  } else if (isError) {
    content = <h1>{error}</h1>;
  } else if (posts.length === 0) {
    content = <h1>No posts found!</h1>;
  } else {
    content = (
      <ul className="list-decimal">
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    );
  }

  return <div>{content}</div>;
}
