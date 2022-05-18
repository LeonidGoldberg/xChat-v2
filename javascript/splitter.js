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
  };

var mouseDownOnResizeHandle = false;
const minLeftColumnWidth = 200;
const maxLeftColumnWidth = 500;


window.addEventListener('mousedown', e => { 
  var handlePosition = leftColumn.getBoundingClientRect().right;
  if (((handlePosition - 2) < e.clientX) & (e.clientX < (handlePosition + 2))) {
    e.preventDefault()
    mouseDownOnResizeHandle = true;
  } else {
    mouseDownOnResizeHandle = false
  }
});

window.addEventListener('mouseup', e => { 
  mouseDownOnResizeHandle = false;
});


window.addEventListener('mousemove', e => {
  var handlePosition = leftColumn.getBoundingClientRect().right;
    if (((handlePosition - 2) < e.clientX) & (e.clientX < (handlePosition + 2))) {
      document.body.style.cursor = "ew-resize";
    }
    else {
        document.body.style.cursor = "auto";
    }
    if (mouseDownOnResizeHandle) {
      windowWidth = window.screen.width
      if (leftColumn.getBoundingClientRect().width >= minLeftColumnWidth) {
        var allowance = Math.max(minLeftColumnWidth, e.clientX);
        if (e.clientX >= maxLeftColumnWidth) {
          allowance = maxLeftColumnWidth;
        };
      leftColumn.style.width = (allowance) + "px";
      }
    };
  });

