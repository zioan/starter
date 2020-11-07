import React from "react";

const Tweet = ({ name, message }) => {
  return (
    <div className="tweet">
      <h2>{name}</h2>
      <h3>{message}</h3>
      <button>Delete</button>
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
