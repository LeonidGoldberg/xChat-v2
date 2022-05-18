const startingNewMessageTextFieldHeight = 36;

newMessageTextField.setAttribute("style", "height:" + (startingNewMessageTextFieldHeight) + "px;overflow-y:hidden;");
newMessageTextField.addEventListener("input", OnInput, false);
newMessageTextField.addEventListener("keydown", event => {
  var key = window.event.keyCode;
  if (key === 13) {
        event.preventDefault();
        sendButton.click()
        newMessageTextField.value = ''
        newMessageTextField.style.height = "auto";
    };
});

function OnInput() {
    this.style.height = "auto";
    if (this.scrollHeight <= 52) {
      this.style.height = (startingNewMessageTextFieldHeight) + "px";
    } else {
      this.style.height = (this.scrollHeight) + "px";
    }
  }
  
  // function newMessageDisplay(content, received=false) {
  //   var current = new Date();
  //   var bubbleDirection = 'right';
  //   if (received) {
  //     bubbleDirection = 'left'
  //   };
  //   chatPanel.innerHTML += `
    
  //   <div class="row no-gutters ">
  //           <div class="col-md-5 offset-md-7">
  //             <div class="chat-bubble chat-bubble--` + bubbleDirection + `">
  //               <p>` + content + `</p>
  //               <div class="time text-muted small">` + current.getHours() + ':' + current.getMinutes() + `</div>
  //             </div>
  //           </div>
  //         </div>
  //   `;
  //   messagesList.scrollTop = messagesList.scrollHeight;
  // };
  
  // function sendMessage() {
  //   if (newMessageTextField.value != '') {
  //     newMessageDisplay(newMessageTextField.value)
  //   }
  //   newMessageTextField.value = ''
  // }

  function sendMessage() {
    if (newMessageTextField.value != '') {
      var msg = new Message(newMessageTextField.value, 'me', null, true, new Date());
      chatPanel.innerHTML += msg.generateHTML();
      messagesList.scrollTop = messagesList.scrollHeight;
    }
    newMessageTextField.value = ''
  }

sendButton.onclick = function() {sendMessage()};