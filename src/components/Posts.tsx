import { useEffect, useState } from 'react';
import Post from './Post';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((posts) => setPosts(posts));
  }, [posts]);

  return (
    <>
      {posts
        .slice(0, 10)
        .map(
          (post: {
            userId: number;
            id: number;
            title: string;
            body: string;
          }) => (
            <Post key={post.id}>{post.title}</Post>
          )
        )}
    </>
  );
};

export default Posts;
