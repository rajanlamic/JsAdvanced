eventManager = function(what, event) {

    function addEvent(element, event, listener) {
        if (element.addEventListener) {                    // For all major browsers, except IE 8 and earlier
            element.addEventListener(event, listener);
        } else if (element.attachEvent) {                  // For IE 8 and earlier versions
            element.attachEvent("on" + event, listener);
        }
    }

    function removeEvent(element, event, listener) {
        if (element.removeEventListener) {                    // For all major browsers, except IE 8 and earlier
            element.removeEventListener(event, listener);
        } else if (element.detachEvent) {                  // For IE 8 and earlier versions
            element.detachEvent("on" + event, listener);
        }
    }


    function event(what, event, element, listener) {
        return what + 'Event'(element, event, listener);
    }

    return {
        event: event
    };
}

var elmToObserveEvent = document.getElementById('txtEventObserver');

eventManager('add', 'click').event(elmToObserveEvent, function () {
    alert('clicked');
});


var context = $("body");


var registered = {
  'first' : {'elm': 'logonPassword', 'func' : function () { return 'text'; }},
  'secon' : {'elm': 'logonPasswordVerify', 'func' : function () { return 'val'; }},
  //'third' : {'elm': '.comment', 'func' : 'text'}
};


for (var i in registered) {
  
  document.getElementById(registered[i].elm).addEventListener('click', registered[i].func);
  
  //console.log(registered[i].elm);
  //console.log(registered[i].elm);
  //console.log(context.find(registered[i].elm).attr("id"));
  
  console.log(i + ' --> ' + registered[i].elm  + ' --> ' + registered[i].func);
  
  //context.find(registered[i].elm).on('click', function() {
   // alert($(this).attr("id"));
  //});
  
  
//console.log(context.find(registered[i].elm);
  
 // context.find(registered[i].elm).bind('click', {
  //  alert(this.attr("id"));
 // }));
  

}








