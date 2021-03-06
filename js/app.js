$(document).ready(function() {


 $('form').submit(function (evt) {
    // highlight the button
    // not AJAX, just cool looking
     evt.preventDefault();
     var searchText = $('#search');
     var submit = $('#submit');
      searchText.prop("disabled", true);
      submit.attr("disabled", true).val("Searching....");
    // the AJAX part
    var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    var animal = searchText.val();
    var flickrOptions = {
      tags: animal,
      format: "json"
    };
    function displayPhotos(data) {
      var photoHTML = '<ul>';
      $.each(data.items,function(i,photo) {
        photoHTML += '<li class="grid-25 tablet-grid-50">';
        photoHTML += '<a href="' + photo.link + '" class="image">';
        photoHTML += '<img src="' + photo.media.m + '"></a></li>';
        
      }); // end each
      photoHTML += '</ul>';
      $('#photos').html(photoHTML);
      searchText.prop("disabled", false);
      submit.attr("disabled", false).val("Search");
    }
    $.getJSON(flickerAPI, flickrOptions, displayPhotos);

  }); // end click

}); // end ready