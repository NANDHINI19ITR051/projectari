import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import Help from "../components//Help";
import BotAvatar from "../components/BotAvatar/BotAvatar";
import OurAvatar from "../components/BotAvatar/OurAvatar";
import CrediantialSet from "../components/MainOptions/CrediantialSet/CrediantialSet";
import FunctionSet from "../components/MainOptions/FunctionSet/FunctionSet";
export const botName = "VLBot";

const config = {
  botName: botName,
  initialMessages: [
    createChatBotMessage(
      `Welcome to ${botName} Assistance. How can I help you?`,
      {
        widget: "help",
      }
    ),
  ],
  customComponents: {
    botAvatar: (props) => <BotAvatar {...props} />,
    userAvatar: (props) => <OurAvatar {...props} />,
  },
  customStyles: {
    botMessageBox: {
      backgroundColor: "#f47221",
    },
    chatButton: {
      backgroundColor: "#f47221",
    },
  },
  widgets: [
    {
      widgetName: "help",
      widgetFunc: (props) => <Help {...props} />,
    },
    {
      widgetName: "crediantialset",
      widgetFunc: (props) => <CrediantialSet {...props} />,
    },
    {
      widgetName: "functionset",
      widgetFunc: (props) => <FunctionSet {...props} />,
    },
  ],
};

export default config;
