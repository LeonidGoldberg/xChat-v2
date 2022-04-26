var leftColumn = document.getElementsByClassName('left-side')[0];
var rightColumn = document.getElementsByClassName('right-side')[0];
// var resizeHandle = document.getElementsByClassName('resize-handle')[0];
var chatPanel = document.getElementById('ChatPanel');
var sendButton = document.getElementsByClassName('send-button')[0];
var messagesList = document.getElementsByClassName('messages-list')[0];
var newMessageTextField = document.getElementById('NewMessageTextField');


function testFunc() {
  console.log('test@');
};

const tx = document.getElementsByTagName("textarea");
for (let i = 0; i < tx.length; i++) {
  tx[i].setAttribute("style", "height:" + (tx[i].scrollHeight) + "px;overflow-y:hidden;");
  tx[i].addEventListener("input", OnInput, false);
}

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

function sendIfEnterPressed() {
  var key = window.event.keyCode;
  if (key === 13) {
        sendButton.click()
        newMessageTextField.value = ''
    };
  
}

sendButton.onclick = function() {sendMessage()};


