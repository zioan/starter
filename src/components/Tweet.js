import React from "react";

const Tweet = ({ name, tweet, tweets, setTweets }) => {
  const deleteTweet = () => {
    setTweets(tweets.filter((t) => t !== tweet));
  };
  return (
    <div className="tweet">
      <h2>{name}</h2>
      <h3>{tweet}</h3>
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
