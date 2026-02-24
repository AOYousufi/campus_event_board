function displayMenu(c){
    document.getElementById(c).classList.toggle('show');
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