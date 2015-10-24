$(document).ready(function () {
  // ready for dom (hopefully)
var albumsView = _.template($('#albumsViewTmpl').html());
console.log("photo-album template: ", albumsView);
window.albumCoversHTML = "";

// merge data from myAlbums with markup in order to add to html
  _.each(myAlbums, function (currVal, idx, arr) {
    albumCoversHTML += albumsView(currVal);
    console.log('albumCoversHTML: ', albumCoversHTML);
  });

// markup for the dom
var headerTitle = "<header><h1>Summer 2015</h1></header>";
$('header').html(headerTitle);

$('.albumCollection').html(albumCoversHTML);

var homeOfAlbums = _.filter(myAlbums, function (currItem, idx) {
  return homeOfAlbums;
});
  _.each(homeOfAlbums, function (currItem) {
    $('.home').html(albumsView(currItem));
  });

  $('.albums').on('click', function (event) {
    event.preventDefault();
    $(this).closest('.hidden').remove();
    $(this).closest('.active-section').addClass(single-album);
  });

// $('nav a').on('click', function (event) {
//   event.preventDefault();
//     var clickedSection = "." + $(this).attr('rel');
//     console.log(clickedSection);
//     $(clickedSection).addClass('active-section');
//     $(clickedSection).siblings('section').removeClass('active-section');
// });

// $('.album1').on('click', function(event){
//  event.preventDefault();
//  $('.photo-boxes-container').toggleClass('hidden');
//  $('.container1').append("<img src='" + photos.pics1[0] + "'>");
//  $('.container1').append("<img src='" + photos.pics2[0] + "'>");
//  $('.container1').append("<img src='" + photos.pics3[0] + "'>");
//  $('.container1').append("<img src='" + photos.pics4[0] + "'>");
//  $('.container1').append("<img src='" + photos.pics5[0] + "'>");
//  $('.container1').append("<img src='" + photos.pics6[0] + "'>");
// });





























});
