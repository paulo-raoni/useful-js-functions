const {log} = console;
const blackList = ["H", "h", "gay"];

const GLOBAL_CONSTANTS = {
  TOTAL_BLACKLIST_VALIDATION: 15,
  MAXIMUM_RESPONSE_COUNT: 10,
  RECONNECT_INTERVAL: 3000,
  CHECK_EXIT_INTERVAL: 1000,
  MESSAGE_LIST: [
    {
      message: "Olá tudo bem?",
      timeout: 3000
    }, {
      message:"Um belo dia hoje, não?",
      timeout: 5000
    }
  ]
}

const globalVariables = {
  counterValidation: 0,
  intervalCheckValidation: 0
}


class DOMComponents {
  static getMyMsgElement() {
    return document.querySelector("#chatarea > p.yourmsg");
  }

  static getAllMyMsgElement() {
    return document.querySelectorAll("#chatarea > p.yourmsg");
  }

  static getTheirMsgElement() {
    return document.querySelector("#chatarea > p.theirmsg");
  }

  static getAllTheirMsgElement() {
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
    return DOMComponents.getTheirMsgElement() ? true : false;
  }

  static exposeCurrentTheirMessageList() {
    const allTheirMsg = Array.from(DOMComponents.getAllTheirMsgElement()).map(el => el.textContent);
    console.log("theirMsgList: ");
    console.log(allTheirMsg);
  }
}

class Validator {
  static async validateBlacklistedWords() {
    const theirMsgElement = DOMComponents.getAllTheirMsgElement();
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
    const myMsgElement = DOMComponents.getAllMyMsgElement();
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
      if(globalVariables.counterValidation === GLOBAL_CONSTANTS.MAXIMUM_RESPONSE_COUNT && !Utils.hasTheirMessage()) {
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

  static messageExists(msg) {
    const regexp = new RegExp(`^${msg}$`, 'g');
    const messageList = DOMComponents.getAllMyMsgElement();
    return Array.from(messageList).find(el => regexp.test(el.innerHTML) );
  }  

  static endChat() {
    const endChatButton = DOMComponents.getEndChatButton(); 
    endChatButton.click();
  }

  static messageSender(message, timeOut) {
    return new Promise((resolve, reject) => {
      setTimeout(() => { 
        const buttonNewChat = DOMComponents.getButtonNewChat();

        if(buttonNewChat) {
          reject("Message stopped by new chat...");
        } else if(!Chat.messageExists(message)) {
          resolve(this.messageWritter(message));
        } else {
          reject(`Message ${message} already exists on chat.`);
        }   

      }, timeOut);
    });
  }

  static async handleChat() {
    const buttonNewChat = DOMComponents.getButtonNewChat();
    Interval.clearIntervalCheckValidation(globalVariables.intervalCheckValidation);
    ++globalVariables.counterValidation;
    
    if(globalVariables.counterValidation < GLOBAL_CONSTANTS.TOTAL_BLACKLIST_VALIDATION) {        
      globalVariables.intervalCheckValidation = setInterval(Validator.validateBlacklistedWords, 500);
    }  
    
    Validator.validateResponseTime();
    
    if(!buttonNewChat) {  
      return;
    }

    Utils.exposeCurrentTheirMessageList();
    globalVariables.counterValidation = 0; 
    
    buttonNewChat.click();    
    try {
      for(const messageObj of GLOBAL_CONSTANTS.MESSAGE_LIST) {
        await Chat.messageSender(messageObj.message, messageObj.timeout);
      }
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

