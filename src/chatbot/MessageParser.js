class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    console.log(message);
    //Greetings
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes("hello")) {
      this.actionProvider.greet();
    }

    //Password Reset
    if (
      lowerCaseMessage.includes("password reset") ||
      lowerCaseMessage.includes("pr")
    ) {
      this.actionProvider.handlePasswordReset();
    }

    //Password Reset - Linkus Password
    if (
      lowerCaseMessage.includes("linkus password") ||
      lowerCaseMessage.includes("lp")
    ) {
      this.actionProvider.choosepassword("Linkus Password");
    }

    //Password Reset - Desktop Password
    if (
      lowerCaseMessage.includes("desktop password") ||
      lowerCaseMessage.includes("dp")
    ) {
      this.actionProvider.choosepassword("Desktop Password");
    }

    //Password Reset - Office 365 Password
    if (
      lowerCaseMessage.includes("office 365 password") ||
      lowerCaseMessage.includes("o365p")
    ) {
      this.actionProvider.choosepassword("Office 365 Password");
    }
  }
}

export default MessageParser;