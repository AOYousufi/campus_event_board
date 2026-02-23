function displayFilters(){
    document.getElementById('filters').classList.toggle('show');
}

window.onclick = function(event) {
  if (!event.target.matches('.filter_button')) {
    var filters = document.getElementsByClassName("filters_list");
    var i;
    for (i = 0; i < filters.length; i++) {
      var openFilters = filters[i];
      if (openFilters.classList.contains('show')) {
        openFilters.classList.remove('show');
      }
    }
  }
}