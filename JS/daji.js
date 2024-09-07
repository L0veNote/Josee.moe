$(document).keyup(function(evtobj) {     
    if (!(evtobj.altKey || evtobj.ctrlKey || evtobj.shiftKey)){
if (evtobj.keyCode == 16) {return false;}
        if (evtobj.keyCode == 17) {return false;}
$("body").append(evtobj.keyCode + " ");
    }
});

function openWindow() {
    var win = window.open("", "Title", "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=780, height=200, top="+(screen.height-400)+", left="+(screen.width-840));
    win.document.body.innerHTML = "Text";
  }
  
  $(window).keydown(function(event) 
  {
      if((event.keyCode == 107 && event.ctrlKey == true) || (event.keyCode == 109 && event.ctrlKey == true))
      {
          event.preventDefault(); 
      }
    });

  $(window).bind('mousewheel DOMMouseScroll', function(event) 
  {
      if(event.ctrlKey == true)
      {
          event.preventDefault(); 
      }
    });