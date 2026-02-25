var events = document.getElementsByClassName('event_panel');
var societies = ['computing_society'];
var computing_society = 'computing_society';
console.log(events);

for(var i = 0; i < events.length; i++){
    for(var j = 0; j < societies.length; j++){
        if(events[i].className.indexOf(societies[i]) > -1){
            var eventArr = events[i].className.split(' ');
            var tagArr = societies[i].split(' ');
            for (i = 0; i < tagArr.length; i++) {
                if (eventArr.indexOf(tagArr[i]) == -1) {
                events[i].className += ' ' + tagArr[i];
                }
            }
        }
    }
}