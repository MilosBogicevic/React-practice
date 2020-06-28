import React from "react";
import ReactDOM from "react-dom";
import CommentForm from "./components/CommentForm";
import faker from "faker";

const App = () => {
  return (
    <div className="ui container comments massive">
      <h1 className="ui dividing header">Comments</h1>
      <CommentForm
        author="Marko Petrovic"
        date="5 minutes ago"
        content="This course is amazing."
        avatar={faker.image.avatar()}
      />
      <CommentForm
        author="Nenad Marinkovic"
        date="1 day ago"
        content="The course is what a newbie like me could understand."
        avatar={faker.image.avatar()}
      />
      <CommentForm
        author="Petar Zivkovic"
        date="1 day ago"
        content="This course is very useful for beginners."
        avatar={faker.image.avatar()}
      />
      <CommentForm
        author="Ivan Novakovic"
        date="3 days ago"
        content="Short, to the point and very easy to follow."
        avatar={faker.image.avatar()}
      />
      <CommentForm
        author="Marko Ivanovic"
        date="4 days ago"
        content="This tutorial proved to be very helpful for me."
        avatar={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
