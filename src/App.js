import React from "react";
//Import components
import TweetList from "./components/TweetList";
import CreateTweet from "./components/CreateTweet";

function App() {
  //Here is the place to write normal js
  const name = "Zioan";
  const message = "This is the actual message.";
  return (
    <div>
      <h1>Hello react</h1>
      <CreateTweet />
      <TweetList name={name} message={message} />
    </div>
  );
}

export default App;
