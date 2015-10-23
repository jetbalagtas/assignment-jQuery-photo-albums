$(document).ready(function () {
  // ready for dom (hopefully)
var myPhotoAlbumTemplate = _.template($('#photoAlbumTmpl').html());
console.log("photo-album template: ", myPhotoAlbumTemplate);
window.myPhotoAlbumHTML = "";

// merge data from myAlbums with markup in order to add to html
  _.each(myAlbums, function (currVal, idx, arr) {
    myPhotoAlbumHTML += myPhotoAlbumTemplate(currVal);
      // console.log('myPhotoAlbumHTML: ', myPhotoAlbumHTML);
  });

// markup for the dom
var headerTitle = "<header><h1>My Albums</h1></header>";
$('header').html(headerTitle);

$('.albums').html(myPhotoAlbumHTML);

var homeOfAlbums = _.filter(myAlbums, function (currItem, idx) {
  return idx < 2;
});
  _.each(homeOfAlbums, function (currItem) {
    $('.home').append(myPhotoAlbumTemplate(currItem));
  });

  $('.albums').click(function (event) {
    $(this).closest('section').remove();
  });

$('nav a').on('click', function (event) {
  event.preventDefault();
    var clickedSection = "." + $(this).attr('rel');
    console.log(clickedSection);
    $(clickedSection).addClass('active-section');
    $(clickedSection).siblings('section').removeClass('active-section');
});































});
