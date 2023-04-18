import React from "react";

import "../../style.css";

const CrediantialSet = (props) => {
  const crediantials = [
    {
      text: "Register",
      handler: props.actionProvider.choosecrediantial,
      id: 1,
    },
    {
      text: "Login",
      handler: props.actionProvider.choosecrediantial,
      id: 2,
    },
    {
      text: "Logout",
      handler: props.actionProvider.choosecrediantial,
      id: 3,
    },
  ];

  const crediantialHandler = (event) => {
    console.log(event.target.value);
    props.actionProvider.choosecrediantial(event.target.value);
  };

  const buttonsMarkup = crediantials.map((crediantialit) => (
    <button
      key={crediantialit.id}
      value={crediantialit.text}
      onClick={crediantialHandler}
      className="chatbot-button"
    >
      {crediantialit.text}
    </button>
  ));

  return <div className="chatbot-container">{buttonsMarkup}</div>;
};

export default CrediantialSet;
