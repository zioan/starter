import React, { useState } from "react";
//Import components
import TweetList from "./components/TweetList";
import CreateTweet from "./components/CreateTweet";
import s from "./styles/App.module.css";

//Create functions
// const sayHelloHandler = (user) => {
//   console.log(`Hello ${user}`);
// };

function App() {
  //Here is the place to write normal js
  //State
  const [name, setName] = useState("Zioan");
  //State passed to CreateTweet
  const [textInput, setTextInput] = useState("");
  const [tweets, setTweets] = useState([]);

  return (
    <div>
      <h1 className={s.title}>Twitter Light</h1>
      <CreateTweet
        textInput={textInput}
        setTextInput={setTextInput}
        tweets={tweets}
        setTweets={setTweets}
      />
      <TweetList
        setName={setName}
        name={name}
        tweets={tweets}
        setTweets={setTweets}
      />
      {/* <button onClick={() => sayHelloHandler("Mike")}>Click</button> */}
    </div>
  );
}

export default App;
