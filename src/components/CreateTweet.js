import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const CreateTweet = ({ textInput, setTextInput, tweets, setTweets }) => {
  //State from app.js
  const userInputHandler = (e) => {
    setTextInput(e.target.value);
  };
  const submitTweetHandler = (e) => {
    e.preventDefault();
    setTweets([...tweets, { message: textInput, id: uuidv4() }]);
    setTextInput("");
  };

  return (
    <form onSubmit={submitTweetHandler}>
      <textarea
        value={textInput}
        onChange={userInputHandler}
        cols="50"
        rows="5"
      ></textarea>
      <br />
      <button>Sumbit</button>
    </form>
  );
};

export default CreateTweet;
