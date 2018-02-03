// Code here handles queries for specific characters in the database
// In this case, the user submits a character's name... we then pass that character's name as a
// URL parameter. Our server then performs the search to grab that character from the Database.

// when user hits the search-btn

$(function() {
    $(".dropdown-menu").on("mouseup", '*', function() {
        var searchTerm = $(this).attr('data-value');
        var youtubeSearch = $(this).attr('data-search');
        fetch(
                'https://api.stackexchange.com/2.2/questions?pagesize=5&tagged=' + searchTerm + '&site=stackoverflow'
            )
            .then(function(response) {
                if (response.ok) { return response.json(); }
            })
            .then(function(rJsn) {
                $('ul.articles').empty();
                rJsn.items.forEach(function(obj, i) {
                    $(".articles").append('<li ><a href= ' + obj.link + '>' + obj.title + '</a></li>')
                })
            });

        function searchYoutube(searchTerm) {
            var baseURL = "https://www.googleapis.com/youtube/v3/search";
            var query = {

                q: searchTerm,
                key: 'AIzaSyBLgm6-G9dBZaC0o_fatgEiCh125MiIxvk',
                part: 'snippet'
            };

            $.getJSON(baseURL, query, function(stashaun) {
                $('ul.tutorials').empty();
                stashaun.items.forEach(function(obj, i) {
                    $(".tutorials").append('<li ><a href="https://www.youtube.com/watch?v= ' + obj.id.videoId + '">' + obj.snippet.title + '</a></li>')
                })


            });
        }
        searchYoutube(youtubeSearch)
    })
})