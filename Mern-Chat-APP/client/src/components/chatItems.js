import React from "react";

export default function ChatItems({ props }) {
  return (
    <div className="chatitems-container">
      <p className="con-icon">{props.name[0]}</p>
      <p className="con-title">{props.name}</p>
      <p className="con-lastMessage">{props.lastMessage}</p>
      <p className="con-timeStamp">{props.timeStamp}</p>
    </div>
  );
}
