var templates = {
  albumsViewTmpl: [
    '<article class="albums" rel="albumName">',
    '<a href="" rel="albumName"><img src="<%= photo1 %>"></a>',
    "<p><%= albumName %></p>",
    '</article>'
  ].join(""),

  singleAlbumTmpl: [
    '<article class="pics" rel="albumName">',
    '<img src="<%= photo1 %>">',
    '<img src="<%= photo2 %>">',
    '<img src="<%= photo3 %>">',
    '</article>'
  ].join("")
};
