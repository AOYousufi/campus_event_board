var locationFilter = '';
var typesFilter = '';
var societyFilter = '';
var monthFilter = '';
var dateFilter = '';
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
  filters[2] = societyFilter;
  filters[3] = monthFilter;
  filters[4] = dateFilter;

  filterEvents();
}

function updateTypeFilter(type){
  if (type == 'clear'){
    type = '';
  }

  typesFilter = type;
  filters[0] = locationFilter;
  filters[1] = type;
  filters[2] = societyFilter;
  filters[3] = monthFilter;
  filters[4] = dateFilter;

  filterEvents();
}

function updateSocietyFilter(society){
  if(society == 'clear'){
    society = '';
  }

  societyFilter = society;
  filters[0] = locationFilter;
  filters[1] = typesFilter;
  filters[2] = society;
  filters[3] = monthFilter;
  filters[4] = dateFilter;

  filterEvents();
}

function updateMonthFilter(month){
  if(month == 'clear'){
    month = '';
  }

  monthFilter = month;
  filters[0] = locationFilter;
  filters[1] = typesFilter;
  filters[2] = societyFilter;
  filters[3] = month;
  filters[4] = dateFilter;

  console.log(filters);

  filterEvents();
}

function updateDayFilter(date){
  if(date == 'clear'){
    date = '';
  }

  dateFilter = date;
  filters[0] = locationFilter;
  filters[1] = typesFilter;
  filters[2] = societyFilter;
  filters[3] = monthFilter;
  filters[4] = date;

  console.log(filters);

  filterEvents();
}

function clearAllFilters(){
  typesFilter = '';
  locationFilter = '';
  societyFilter = '';

  for(var i = 0; i < filters.length; i++){
    filters[i] = '';
  }
  
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

function searchEvents(){
  var input, filter, eventGrid, events, h4, i, title;
  input = document.getElementById('search');
  filter = input.value.toUpperCase();
  eventGrid = document.getElementById('events_grid');
  events = eventGrid.getElementsByTagName('article');

  //Loop through events and hide the ones that don't match search
  for (i = 0; i < events.length; i++) {
    h4 = events[i].getElementsByTagName("h4")[0];
    title = h4.textContent || h4.innerText;
    if (title.toUpperCase().indexOf(filter) > -1) {
      events[i].style.display = "";
    } else {
      events[i].style.display = "none";
    }
  }
}