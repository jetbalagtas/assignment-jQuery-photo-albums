$(document).ready(function () {
  photoAlbumPage.init ();
});

var photoAlbumPage = {
  init: function() {
    photoAlbumPage.styling();
    photoAlbumPage.events();
  },
  events: function() {
    $('nav').on('click', 'a', function(event) {
      event.preventDefault();
      var element = $('this').attr('rel');
      var $pageSection = $(sectionclass);
      $(sectionclass).addClass('active-section');
      $(sectionclass).siblings('secton').removeClass('active-section');
      photoAlbumPage.showActiveSection(element);
    });
    $('albums').on('click', 'rel', function(event) {
      event.preventDefault();
      console.log('this', this);
      var element = this;
      photoAlbumPage.showActiveSection(element);
    });
  },
  styling: function() {
    photoAlbumPage.loadAlbums();
  },
  loadAlbums: function () {
    var albumCoversHTML = "";
    var singleAlbumHTML = "";
    _.each(myAlbums, function (currVal, idx, arr) {
      albumCoversHTML += photoAlbumPage.loadTemplate('albumsViewTmpl', currVal);
      singleAlbumHTML += photoAlbumPage.loadTemplate('singleAlbumTmpl', currVal);
    });
    $('.albumCollection').html(albumCoversHTML);
    var headerTitle = "<header><h1>Summer 2015</h1></header>";
    $('.albumsHeader').html(headerTitle);
    $('.single-album').html(singleAlbumHTML);
  },
  showActiveSection: function (clickedItem) {
    var clickedSection = "." + $(clickedItem).attr('rel=albumName');
    $(clickedSection).addClass('active-section');
    $(clickedSection).siblings('section').removeClass('active-section');
  },
  getTemplate: function(name) {
    return _.template(templates[name]);
  },
  loadTemplate: function(name, val) {
    var tmpl = photoAlbumPage.getTemplate(name);
    return tmpl(val);
  },
};

//   // All Albums View
// var albumsView = _.template($('#albumsViewTmpl').html());
// console.log("photo-album template: ", albumsView);
// window.albumCoversHTML = "";
// // merge data from myAlbums with markup in order to add to html
//   _.each(myAlbums, function (currVal, idx, arr) {
//     albumCoversHTML += albumsView(currVal);
//     console.log('albumCoversHTML: ', albumCoversHTML);
//   });
//
// Single Album View
// var singleAlbumView = _.template($('#singleAlbumTmpl').html());
// console.log("photo-album template: ", singleAlbumView);
// window.singleAlbumHTML = "";
// // merge data from myAlbums with markup in order to add to html
// var Madrid = _.filter(myAlbums, function (currVal, idx, arr) {
//     console.log(currVal);
//     return currVal.albumName === "Madrid";
//   });
//   // _.each(myAlbums, function (currVal, idx, arr) {
//     singleAlbumHTML += singleAlbumView(Madrid[0]);
  //   console.log('singleAlbumHTML: ', singleAlbumHTML);
  // });
//
// // Single Picture View
// var singlePicView = _.template($('#singlePicTmpl').html());
// console.log("photo-album template: ", singlePicView);
// window.singlePicHTML = "";
// // merge data from myAlbums with markup in order to add to html
//   _.each(myAlbums, function (currVal, idx, arr) {
//     singlePicHTML += singlePicView(currVal);
//     console.log('singlePicHTML: ', singlePicHTML);
//   });

// // markup for the dom
// var headerTitle = "<header><h1>Summer 2015</h1></header>";
// $('.albumsHeader').html(headerTitle);
//
// $('.albumCollection').html(albumCoversHTML);
// $('.single-album').html(singleAlbumHTML);
// $('.solo-pic').html(singlePicHTML);
//
// $('.albums').on('click', function (event) {
//   event.preventDefault();
//   $('.single-album').removeClass("hidden");
//   $('single-album').html(singleAlbumHTML);
//   $('.sidebar').removeClass("hidden");
//   $('.albumCollection').addClass("hidden");
//   $('h1').text(myAlbums[0].albumName);
// });
//
// $('.pics').on('click', function (event) {
//   event.preventDefault();
//   $('.solo-pic').removeClass("hidden");
//   $('solo-pic').html(singlePicHTML);
//   $('.sidebar').addClass("hidden");
//   $('.single-album').addClass("hidden");
//   $('h1').text('myAlbums.albumName');
// });

// Calvin's code
// $('nav a').on('click', function (event) {
//   event.preventDefault();
//     var clickedSection = "." + $(this).attr('rel');
//     console.log(clickedSection);
//     $(clickedSection).addClass('active-section');
//     $(clickedSection).siblings('section').removeClass('active-section');
// });

// Bear's code
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

// my old code
// var homeOfAlbums = _.filter(myAlbums, function (currItem, idx) {
//   return homeOfAlbums;
// });
//   _.each(homeOfAlbums, function (currItem) {
//     $('.home').html(albumsView(currItem));
//   });
//
// var oneAlbumHeader = _.each(myAlbums, function() {
//   return myAlbums.albumName;
// });
//
// $('li a').on('click', function (event) {
//   event.preventDefault();
//     var clickedSection = "." + $(this).attr('rel');
//     console.log(clickedSection);
//     $(clickedSection).addClass('active-section');
//     $(clickedSection).siblings('section').removeClass('active-section');
// });
//
// $('.albums').on('click', function (event) {
//   event.preventDefault();
//     var clickedSection = "." + $(this).attr('rel');
//     console.log(clickedSection);
//     $(clickedSection).addClass('active-section');
//     $(clickedSection).siblings('section').removeClass('active-section');
// });
//
// $('.pics').on('click', function (event) {
//   event.preventDefault();
//     var clickedSection = "." + $(this).attr('rel');
//     console.log(clickedSection);
//     $(clickedSection).addClass('active-section');
//     $(clickedSection).siblings('section').removeClass('active-section');
// });
