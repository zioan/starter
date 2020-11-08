import React from "react";
import "../styles/Tweet.scss";

const Tweet = ({ name, tweet, tweets, setTweets }) => {
  const deleteTweet = () => {
    setTweets(tweets.filter((state) => state.id !== tweet.id));
  };
  return (
    <div className="tweet">
      <h2>{name}</h2>
      <h3>{tweet.message}</h3>
      <button onClick={deleteTweet}>Delete</button>
      <button>Like</button>
    </div>
  );
};
// const Tweet = (props) => {
//   return (
//     <div className="tweet">
//       <h2>Name: {props.name}</h2>
//       <h3>{props.message}</h3>
//       <button>Delete</button>
//       <button>Like</button>
//     </div>
//   );
// };

export default Tweet;
