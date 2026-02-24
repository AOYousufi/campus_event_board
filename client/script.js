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

function filterEvents(c) {
  var x, i;
  x = document.getElementsByClassName('event_panel');
  if (c == 'all') c = '';
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    hideEvent(x[i], 'hide_event');
    if (x[i].className.indexOf(c) > -1) showEvent(x[i], 'hide_event');
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

