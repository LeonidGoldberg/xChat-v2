newMessageTextField.setAttribute("style", "height:" + (newMessageTextField.scrollHeight) + "px;overflow-y:hidden;");
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
    this.style.height = (this.scrollHeight) + "px";
  }
  
  function newMessageDisplay(content, received=false) {
    var current = new Date();
    var bubbleDirection = 'right';
    if (received) {
      bubbleDirection = 'left'
    };
    chatPanel.innerHTML += `
    
    <div class="row no-gutters ">
            <div class="col-md-5 offset-md-7">
              <div class="chat-bubble chat-bubble--` + bubbleDirection + `">
                <p>` + content + `</p>
                <div class="time text-muted small">` + current.getHours() + ':' + current.getMinutes() + `</div>
              </div>
            </div>
          </div>
    `;
    messagesList.scrollTop = messagesList.scrollHeight;
  };
  
  function sendMessage() {
    if (newMessageTextField.value != '') {
      newMessageDisplay(newMessageTextField.value)
    }
    newMessageTextField.value = ''
  }

sendButton.onclick = function() {sendMessage()};