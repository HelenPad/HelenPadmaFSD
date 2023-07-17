import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Post from "./components/Post";
import PostForm from "./components/PostForm";

const App = () => {
  // Sample initial blog posts
  const initialPosts = [
    {
      id: 1,
      username: "John",
      message: "Hello, this is my first blog post!",
      time: "July 17, 2023 12:34 PM",
    },
    {
      id: 2,
      username: "Smitha",
      message: "Check out my latest travel adventures!",
      time: "July 18, 2023 10:15 AM",
    },
  ];

  const [posts, setPosts] = useState(initialPosts);
  const handlePost = (newPost) => {
    // Assign a unique ID to the new post
    newPost.id = posts.length + 1;

    // Add the new post to the existing posts array
    setPosts([...posts, newPost]);
  };

  return (
    <div>
      <Navbar />
      <div style={contentStyle}>
        {/* Post form to allow users to submit new posts */}
        <PostForm onPost={handlePost} />

        {/* Render existing posts */}
        {posts.map((post) => (
          <Post
            key={post.id}
            username={post.username}
            message={post.message}
            time={post.time}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

const contentStyle = {
  maxWidth: "800px",
  margin: "0 auto",
  padding: "1rem",
};

export default App;
