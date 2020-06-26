import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

const App = () => {
  return (
    <div className="ui container comments">
      <h3 className="ui dividing header">Comments</h3>
      <div className="comment">
        <a href="/" className="photo">
          <img alt="User" src={faker.image.avatar()} />
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
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
