var leftColumn = document.getElementsByClassName('left-side')[0];
var rightColumn = document.getElementsByClassName('right-side')[0];
var resizeHandle = document.getElementsByClassName('resize-handle')[0];
var chatPanel = document.getElementById('ChatPanel');
var sendButton = document.getElementsByClassName('send-button')[0];
var messagesList = document.getElementsByClassName('messages-list')[0];
var newMessageTextField = document.getElementById('NewMessageTextField');


function testFunc() {
  console.log('test@');
};


function adaptResizeHandle() {
resizeHandle.style.left = (leftColumn.getBoundingClientRect().right-25) + "px";
leftColumn.style.width = leftColumn.getBoundingClientRect().right + 'px';
}
adaptResizeHandle();

window.addEventListener('resize', adaptResizeHandle);
// window.addEventListener('mousemove', e => {
//   console.log(resizeHandle.getBoundingClientRect().right);
//   console.log(e.offsetX);
//   if (e.offsetX == resizeHandle.getBoundingClientRect().right) {
//     console.log("yes")
//   }
// });


dragElement(resizeHandle);

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos3 = e.clientX;
    // set the element's new position:
    if ((e.clientX < window.innerWidth/5) || (e.clientX > (window.innerWidth - window.innerWidth/2))) {
      closeDragElement();
    } else {
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    console.log(leftColumn.offsetLeft);
    console.log(e.clientX);
    console.log(window.innerWidth)
    leftColumn.style.width = (e.clientX) + "px";  
    // rightColumn.style.width = (window.innerWidth - e.clientX) + "px";
    // resizeHandle.style.left = (leftColumn.getBoundingClientRect().right-25) + "px"; 
  }}

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

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