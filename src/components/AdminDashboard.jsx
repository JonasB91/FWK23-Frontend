import React, { useEffect, useState } from "react";
import { getAllPosts } from "../services/api";
import styles from "./AdminDashboard.module.css";

const AdminDashboard = ({ token }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getAllPosts(token);
      setPosts(data);
    };
    fetchPosts();
  }, [token]);

  return (
    <div className={styles.container}>
      <h2>Alla användares inlägg</h2>
      {posts.map((post) => (
        <div key={post.id} className={styles.post}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <p>Author: {post.author}</p>
        </div>
      ))}
    </div>
  );
};

export default AdminDashboard;
