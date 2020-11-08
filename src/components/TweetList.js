import React from "react";
import Tweet from "./Tweet";

const TweetList = ({ name, tweets, setName, setTweets }) => {
  return (
    <div className="tweet-list">
      {tweets.map((tweet) => (
        <Tweet
          name={name}
          tweet={tweet}
          setTweets={setTweets}
          tweets={tweets}
          key={tweet.id}
        />
      ))}
      ;<button onClick={() => setName("John Doe")}>Click_To_Set_Name</button>
    </div>
  );
};

export default TweetList;
