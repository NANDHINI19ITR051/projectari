import { Component } from "react";

class ActionProvider extends Component {
  constructor(createChatBotMessage, setStateFunc) {
    super();

    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  greet = () => {
    const message = this.createChatBotMessage("Hello User.");
    this.addMessageToState(message);
  };

  //About
  handleAbout = () => {
    const message = this.createChatBotMessage(
      "Web-based training website is the delivery of an educational experience over the internet. It can help students to manage their uploaded videos with the help of account login."
    );
    this.addMessageToState(message);
  };

  //Credentials
  handleCredantials = () => {
    const message = this.createChatBotMessage(
      "Please choose the type of crediantials problem you want to know about.",
      {
        widget: "crediantialset",
      }
    );
    this.addMessageToState(message);
  };

  //Choose Crediantials
  choosecrediantial = (choosecrediantial) => {
    if (choosecrediantial === "Register") {
      const message1 = this.createChatBotMessage(
        "1) Enter Id and password to register in the website."
      );
      this.addMessageToState(message1);
      const message2 = this.createChatBotMessage(
        "2) Register through google authentication to register in the website."
      );
      this.addMessageToState(message2);
    } else if (choosecrediantial === "Login") {
      const message1 = this.createChatBotMessage(
        "1) Enter Id and password to Login in the website."
      );
      this.addMessageToState(message1);
      const message2 = this.createChatBotMessage(
        "2) Login through google authentication to register in the website."
      );
      this.addMessageToState(message2);
    } else if (choosecrediantial === "Logout") {
      const message1 = this.createChatBotMessage(
        "Click on the logout button to logout from the website."
      );
      this.addMessageToState(message1);
    }
  };

  //Functions
  handlerFunctions = () => {
    const message = this.createChatBotMessage(
      "Functions provided by the website",
      {
        widget: "functionset",
      }
    );
    this.addMessageToState(message);
  };

  //Choose Functions
  choosefunction = (choosefunction) => {
    let functiontype = choosefunction;
    if (functiontype === "Upload Video") {
      const message1 = this.createChatBotMessage(
        "Click on the dashboard"
      );
      this.addMessageToState(message1);
      const message2 = this.createChatBotMessage(
        "Click on the upload button to upload the video."
      );
      this.addMessageToState(message2);
    } else if (functiontype === "Remove Video") {
      const message1 = this.createChatBotMessage(
        "Click on the dashboard"
      );
      this.addMessageToState(message1);
      const message2 = this.createChatBotMessage(
        "Select the video you want to remove"
      );
      this.addMessageToState(message2);
      const message3 = this.createChatBotMessage(
        "Click on the remove button to remove the video."
      );
      this.addMessageToState(message3);
    } else if (functiontype === "Wishlist") {
      const message1 = this.createChatBotMessage(
        "Click on the wishlist button"
      );
      this.addMessageToState(message1);
      const message2 = this.createChatBotMessage(
        "Select the video you want to add to wishlist"
      );
      this.addMessageToState(message2);
    }
  };

  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}

export default ActionProvider;
