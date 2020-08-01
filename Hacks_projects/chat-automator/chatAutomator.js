const {log} = console;
const blackList = ["H", "h", "gay"];

const GLOBAL_CONSTANTS = {
  TOTAL_BLACKLIST_VALIDATION: 15,
  MAXIMUM_RESPONSE_COUNT: 10,
  RECONNECT_INTERVAL: 3000,
  CHECK_EXIT_INTERVAL: 1000
}

const globalVariables = {
  counterValidation: 0,
  intervalCheckValidation: 0
}


class DOMComponents {
  static getMyMsgElement() {
    return document.querySelectorAll("#chatarea > p.yourmsg");
  }

  static getTheirMsgElement() {
    return document.querySelectorAll("#chatarea > p.theirmsg");
  }

  static getEndChatButton() {
    return document.querySelector("#btnend");
  }

  static getButtonNewChat() {
    return document.querySelector("#btnnext");
  }

  static getTextAreaElement() {
    return document.querySelector(".chattext");
  }

  static getSendMsgButton() {
    return document.querySelector(".chatstuffarea.buttonmargin");
  }
}


class Utils {
  static regexCreator(el) {
    const pattern = `\\b${el}\\b`
    const regex = new RegExp(pattern, "g");
    return regex;
  }

  static hasMyMsg() {
    return DOMComponents.getMyMsgElement() ? true : false;
  }

  static hasTheirMessage() {
    return DOMComponents.getTheirMsgElement()? true : false;
  }
}

class Validator {
  static async validateBlacklistedWords() {
    const theirMsgElement = DOMComponents.getTheirMsgElement();
    let theirMsg = "";
    
    theirMsgElement.forEach(el => {
      theirMsg += el.innerText;
    });
    
    const invalidByBlackList = blackList.find(el =>  theirMsg.search(Utils.regexCreator(el)) > -1);
    try {
      if(invalidByBlackList) {
        Chat.endChat();
        throw new Error("Invalid chat by validation words");
      }
    } catch (error) {
      throw error;
    }
  }

  static checkChatExitByUser() {
    const myMsgElement = DOMComponents.getMyMsgElement();
    let myMsg = "";
    myMsgElement.forEach(el => {
      myMsg += el.innerText;
    });

    const endedChatByUser = myMsg.search(Utils.regexCreator("3xit")) > - 1 ? 1 : 0;
    try {    
      if(endedChatByUser) {
        Chat.endChat();
        throw new Error("Chat finished by user input '3xit'");
      }
    } catch (error) {
      throw error;
    }
  }

  static validateResponseTime() {
    try {
      if(globalVariables.counterValidation === GLOBAL_CONSTANTS.MAXIMUM_RESPONSE_COUNT && hasTheirMessage()) {
        Chat.endChat();
        throw new Error(`Chat finished by maximum response waiting time ${GLOBAL_CONSTANTS.MAXIMUM_RESPONSE_COUNT * GLOBAL_CONSTANTS.RECONNECT_INTERVAL} seconds`);
      }
    } catch (error) {
      throw error;
    }
  }

}


class Interval {
  static clearIntervalCheckValidation(intervalCheckValidation) {
    clearInterval(intervalCheckValidation);
  }
}



class Chat {
  static messageWritter(message) {
    const sendMsgButton = DOMComponents.getSendMsgButton();
    const textArea = DOMComponents.getTextAreaElement();
    textArea.value = message;
    sendMsgButton.click();
  }

  static endChat() {
    const endChatButton = DOMComponents.getEndChatButton(); 
    endChatButton.click();
  }

  static messageSender(message, timeInterval, firstMessage) {
    return new Promise((resolve, reject) => {
      setTimeout(() => { 
        const buttonNewChat = DOMComponents.getButtonNewChat();
        if(buttonNewChat) {
          reject("Message stopped by new chat...");
        }
        if(!Utils.hasMyMsg() && firstMessage) {  
          resolve(this.messageWritter(message)); 
        } else if(Utils.hasMyMsg()) {
          resolve(this.messageWritter(message)); 
        } else {
          reject("Unexpected Error");
        }
      }, timeInterval);
    });
  }

  static async handleChat() {
    const buttonNewChat = DOMComponents.getButtonNewChat();
    const textArea = DOMComponents.getTextAreaElement();
    Interval.clearIntervalCheckValidation(globalVariables.intervalCheckValidation);
    ++globalVariables.counterValidation;
    
    if(globalVariables.counterValidation < GLOBAL_CONSTANTS.TOTAL_BLACKLIST_VALIDATION) {        
      globalVariables.intervalCheckValidation = setInterval(Validator.validateBlacklistedWords, 500);
    }  
    
    Validator.validateResponseTime();
    
    if(!buttonNewChat) {  
      return;
    }      
  
    globalVariables.counterValidation = 0; 
    
    buttonNewChat.click();    
    try {
      await Chat.messageSender("Olá tudo bem?", 3000, true);
      await Chat.messageSender("Um belo dia hoje, não?", 5000); 
    } catch (error) {
      log("Error: ", error);
      throw error;
    }

  }

}



class App {
  init() {
    setInterval(Chat.handleChat, GLOBAL_CONSTANTS.RECONNECT_INTERVAL);
    setInterval(Validator.checkChatExitByUser, GLOBAL_CONSTANTS.CHECK_EXIT_INTERVAL);
  }
}

function Main () {
  const app = new App();
  app.init();
}


Main();

