import React from "react";
import styled from "styled-components";

const Tweet = ({ name, tweet, tweets, setTweets }) => {
  const deleteTweet = () => {
    setTweets(tweets.filter((state) => state.id !== tweet.id));
  };
  return (
    <TweetStyle>
      <h2>{name}</h2>
      <h3>{tweet.message}</h3>
      <button onClick={deleteTweet}>Delete</button>
      <button>Like</button>
    </TweetStyle>
  );
};

const TweetStyle = styled.div`
  background-color: "red";
  border: 2px solid red;
  border-radius: 25px;
  padding: 10px;
`;

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
