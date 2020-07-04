const {log} = console;
const reconnectChat = () => {
  const newChat = document.querySelector("#btnnext");
  if(!newChat) return;
  const textArea = document.querySelector(".chattext");
  const enter = document.querySelector(".chatstuffarea.buttonmargin");
  const messageWritter = (message) => {
  textArea.value = message;
  enter.click();
  return messageWritter;
  }
  if(textArea.disabled) {
    newChat.click();    
  setTimeout(() => { messageWritter('Hi! ')('How ')(' are ')('you?') }, 1000);          
  }  
};
setInterval(reconnectChat, 3000);