import React from "react";

import "../../style.css";

const FunctionSet = (props) => {
  const functions = [
    {
      text: "Upload Video",
      handler: props.actionProvider.choosefunction,
      id: 1,
    },
    {
      text: "Remove Video",
      handler: props.actionProvider.choosefunction,
      id: 1,
    },
    {
      text: "Wishlist",
      handler: props.actionProvider.choosefunction,
      id: 2,
    },
  ];

  const functionHandler = (event) => {
    console.log(event.target.value);
    props.actionProvider.choosefunction(event.target.value);
  };

  const buttonsMarkup = functions.map((functionit) => (
    <button
      key={functionit.id}
      value={functionit.text}
      onClick={functionHandler}
      className="chatbot-button"
    >
      {functionit.text}
    </button>
  ));

  return <div className="chatbot-container">{buttonsMarkup}</div>;
};

export default FunctionSet;