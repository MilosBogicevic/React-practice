import React from "react";
import ReactDOM from "react-dom";
import CommentForm from "./components/CommentForm";

const App = () => {
  return (
    <div className="ui container comments massive">
      <h1 className="ui dividing header">Comments</h1>
      <CommentForm
        author="Marko Petrovic"
        date="5 minutes ago"
        text="This course is amazing."
      />
      <CommentForm
        author="Nenad Marinkovic"
        date="1 day ago"
        text="The course is what a newbie like me could understand."
      />
      <CommentForm
        author="Petar Zivkovic"
        date="1 day ago"
        text="This course is very useful for beginners."
      />
      <CommentForm
        author="Ivan Novakovic"
        date="3 days ago"
        text="Short, to the point and very easy to follow."
      />
      <CommentForm
        author="Marko Ivanovic"
        date="4 days ago"
        text="This tutorial proved to be very helpful for me."
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
