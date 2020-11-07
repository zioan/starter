import React, { useState } from "react";
//Import components
import TweetList from "./components/TweetList";
import CreateTweet from "./components/CreateTweet";

//Create functions
const sayHelloHandler = (user) => {
  console.log(`Hello ${user}`);
};

function App() {
  //Here is the place to write normal js
  const [name, setName] = useState("Zioan");
  const message = "This is the actual message.";

  return (
    <div>
      <h1>Hello react</h1>
      <CreateTweet />
      <TweetList setName={setName} name={name} message={message} />
      <button onClick={() => sayHelloHandler("Mike")}>Click</button>
    </div>
  );
}

export default App;
