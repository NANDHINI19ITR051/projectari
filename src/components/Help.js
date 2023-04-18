import React from "react";

import "./style.css";

const Help = (props) => {
  const helpChoices = [
    {
      text: "About",
      handler: props.actionProvider.handleAbout,
      id: 1,
    },
    {
      text: "Credantials",
      handler: props.actionProvider.handleCredantials,
      id: 2,
    },
    {
      text: "Functions",
      handler: props.actionProvider.handlerFunctions,
      id: 2,
    },
  ];

  const buttonsMarkup = helpChoices.map((help) => (
    <button key={help.id} onClick={help.handler} className="chatbot-button">
      {help.text}
    </button>
  ));

  return <div className="chatbot-container">{buttonsMarkup}</div>;
};

export default Help;
