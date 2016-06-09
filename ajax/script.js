$(document).ready(function(){
  $("#search").on("submit",function(e){
    e.preventDefault();
    console.log("HI");
    var formData = {
      'q' : $('input[name=q]').val(),
      'type' : $('input[name=type]').val()
    };
    $.ajax({
      type: "GET",
      url: 'https://api.spotify.com/v1/search',
      data: formData,
      success: function(response) {
        var artistArray = response.artists.items;
        for(var i=0; i<artistArray.length; i++){
          for(var j = 0; j<artistArray[i].images.length; j++) {
              var pictureURL = artistArray[i].images[j].url;
              console.log(artistArray[i].images[j].url);
              $('#images').prepend($('<img>',{src:pictureURL}))
          }
        }
      }
    });
  });
});
