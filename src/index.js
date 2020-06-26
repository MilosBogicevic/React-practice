import React from "react";
import ReactDOM from "react-dom";
import CommentForm from "./components/CommentForm";

const App = () => {
  return (
    <div className="ui container comments">
      <h3 className="ui dividing header">Comments</h3>
      <CommentForm />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
