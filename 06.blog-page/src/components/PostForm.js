import React, { useState } from "react";

const PostForm = ({ onPost }) => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !message) {
      alert("Please fill in all fields");
      return;
    }

    const newPost = {
      username,
      message,
      time: new Date().toLocaleString(),
    };

    // Clear form fields
    setUsername("");
    setMessage("");

    // Call the onPost function to handle the new post
    onPost(newPost);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={formGroupStyle}>
        <label style={labelStyle}>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={inputStyle}
        />
      </div>
      <div style={formGroupStyle}>
        <label style={labelStyle}>Message:</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={textareaStyle}
        />
      </div>
      <button type="submit" style={submitButtonStyle}>
        Post
      </button>
    </form>
  );
};

const formGroupStyle = {
  marginBottom: "1rem",
};

const labelStyle = {
  display: "block",
  marginBottom: "0.5rem",
};

const inputStyle = {
  width: "100%",
  padding: "0.5rem",
  fontSize: "1rem",
};

const textareaStyle = {
  width: "100%",
  padding: "0.5rem",
  fontSize: "1rem",
  minHeight: "100px",
};

const submitButtonStyle = {
  background: "#333",
  color: "#fff",
  padding: "0.5rem 1rem",
  marginBottom: "20px",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

export default PostForm;
