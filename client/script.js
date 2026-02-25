var locationFilter = '';
var typesFilter = '';
var filters= [];

function displayMenu(v){
    document.getElementById(v).classList.toggle('show');
}

window.onclick = function(event) {
  if (!event.target.matches('.filter_button') && !event.target.matches('button')) {
    var categories = document.getElementsByClassName('categories_list');
    var i;
    for (i = 0; i < categories.length; i++) {
      var openCategories = categories[i];
      if (openCategories.classList.contains('show')) {
        openCategories.classList.remove('show');
      }
    }

    var filters = this.document.getElementsByClassName('filters_list');
    var j;
    for(j = 0; j < filters.length;j++){
        var openFilters = filters[j];
        if(openFilters.classList.contains('show')){
            openFilters.classList.remove('show');
        }
    }
  }
}

function updateLocationFilter(location){
  if (location == 'clear'){
    location = '';
  }

  locationFilter = location;
  filters[0] = location;
  filters[1] = typesFilter;
  console.log(filters[0]);
  console.log(filters);

  filterEvents();
}

function updateTypeFilter(type){
  if (type == 'clear'){
    type = '';
  }

  typesFilter = type;
  filters[1] = type;
  filters[0] = locationFilter;
  console.log(filters[1]);
  console.log(filters);

  filterEvents();
}

function clearAllFilters(){
  typesFilter = '';
  locationFilter = '';
  filters[0] = '';
  filters[1] = '';

  filterEvents();
}

function filterEvents(){
  var events, i, j;
  events = document.getElementsByClassName('event_panel');

  for(i = 0; i < events.length; i++){
    var show_event = true;
    hideEvent(events[i], 'hide_event');
    for(j = 0; j < filters.length; j++){
      if (events[i].className.indexOf(filters[j]) <= -1){
        //showEvent(events[i], 'hide_event');
        show_event = false;
        break;
      }
    }

    if(show_event == true){
      showEvent(events[i], 'hide_event')
    }
  }
}

// Show filtered elements
function showEvent(event, eventTag) {
  var i, eventArr, tagArr;
  eventArr = event.className.split(' ');
  tagArr = eventTag.split(' ');
  for (i = 0; i < tagArr.length; i++) {
    while (eventArr.indexOf(tagArr[i]) > -1) {
      eventArr.splice(eventArr.indexOf(tagArr[i]), 1);
    }
  }
  event.className = eventArr.join(' ');
}

// Hide elements that are not selected
function hideEvent(event, eventTag) {
  var i, eventArr, tagArr;
  eventArr = event.className.split(' ');
  tagArr = eventTag.split(' ');
  for (i = 0; i < tagArr.length; i++) {
    if (eventArr.indexOf(tagArr[i]) == -1) {
      event.className += ' ' + tagArr[i];
    }
  }
}