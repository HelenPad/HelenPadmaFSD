import React from "react";

const Post = ({ username, message, time }) => {
  return (
    <div style={postStyle}>
      <div style={userInfoStyle}>
        <p style={usernameStyle}>{username}</p>
        <p style={timeStyle}>{time}</p>
      </div>
      <p style={messageStyle}>{message}</p>
    </div>
  );
};

const postStyle = {
  border: "1px solid #ccc",
  borderRadius: "8px",
  padding: "1rem",
  marginBottom: "1rem",
};

const userInfoStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "0.5rem",
};

const usernameStyle = {
  fontWeight: "bold",
};

const timeStyle = {
  fontSize: "0.8rem",
  color: "#666",
};

const messageStyle = {
  fontSize: "1rem",
};

export default Post;
