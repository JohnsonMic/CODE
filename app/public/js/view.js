// Code here handles queries for specific characters in the database
// In this case, the user submits a character's name... we then pass that character's name as a
// URL parameter. Our server then performs the search to grab that character from the Database.

// when user hits the search-btn

$(function(){
  $(".dropdown-menu").on("mouseup", '*', function() {
    var searchTerm = $(this).attr('data-value');

    fetch (
        'https://api.stackexchange.com/2.2/questions?pagesize=5&tagged='+ searchTerm + '&site=stackoverflow'
    )
    .then (function (response) {
        if (response.ok) { return response.json(); }
    } )
    .then (function(rJsn) {
      $('ul.articles').empty();
      rJsn.items.forEach(function(obj,i) {
        console.log('EACH OBJECT', obj)
        $(".articles").append('<li ><a href= '+ obj.link + '>'+ obj.title + '</a></li>')
      })
    });
      console.log($(this).attr('data-value'))
  });
})

