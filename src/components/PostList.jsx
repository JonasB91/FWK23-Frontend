import React, { useEffect, useState } from "react";
import { getPosts } from "../services/api";
import styles from "./PostList.module.css";

const PostList = ({ token }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getPosts(token);
      setPosts(data);
    };
    fetchPosts();
  }, [token]);

  return (
    <div className={styles.container}>
      <h2>Dina inlägg</h2>
      {posts.map((post) => (
        <div key={post.id} className={styles.post}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;
