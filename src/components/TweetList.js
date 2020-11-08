import React from "react";
import Tweet from "./Tweet";

const TweetList = ({ name, tweets, setName }) => {
  return (
    <div className="tweet-list">
      <Tweet name={name} tweets={tweets} />

      <button onClick={() => setName("John Doe")}>Click_To_Set_Name</button>
    </div>
  );
};

export default TweetList;
