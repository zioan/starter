import React, { useState } from "react";

const CreateTweet = () => {
  //State
  const [textInput, setTextInput] = useState("");
  const userInputHandler = (e) => {
    setTextInput(e.target.value);
  };

  return (
    <form>
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
