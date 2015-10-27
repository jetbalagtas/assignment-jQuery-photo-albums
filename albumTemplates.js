var templates = {
  albumsViewTmpl: [
    '<article class="albums">',
    '<img src="<%= photo1 %>">',
    "<p><%= albumName %></p>",
    '</article>'
  ].join(""),

  singleAlbumTmpl: [
    '<article class="pics">',
    '<img src="<%= photo1 %>">',
    '<img src="<%= photo2 %>">',
    '<img src="<%= photo3 %>">',
    '</article>'
  ].join("")
};
