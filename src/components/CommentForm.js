import React from "react";
import faker from "faker";

const CommentForm = () => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={faker.image.avatar()} />
      </a>
      <div className="content">
        <a href="/" className="author">
          Marko
        </a>
        <div className="metadata">
          <span className="date">2 days ago</span>
        </div>
        <div className="text">Some blog content.</div>
      </div>
    </div>
  );
};

export default CommentForm;
