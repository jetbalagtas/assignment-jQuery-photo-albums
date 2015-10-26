// myAlbums array containing 6 objects with arrays of objects
// var myAlbums = [
//   { "albumName": 'madrid',
//     "albumTitle": 'Madrid',
//     "coverPhoto": "https://farm8.staticflickr.com/7785/18318666575_7ec4dd2b9f_k.jpg",
//     "photos": [
//     {"imgURL": "https://farm8.staticflickr.com/7785/18318666575_7ec4dd2b9f_k.jpg"},
//     {"imgURL": "https://farm1.staticflickr.com/530/18318662495_a67a154e38_k.jpg"},
//     {"imgURL": "https://farm1.staticflickr.com/436/18132341479_6471588337_k.jpg"}
//   ]
//   },
//
//   { "albumName": 'toledo',
//     "albumTitle": 'Toledo',
//     "coverPhoto": "https://farm1.staticflickr.com/262/20323763876_5f5c579dd8_b.jpg",
//     "photos": [
//     {"imgURL": "https://farm1.staticflickr.com/262/20323763876_5f5c579dd8_b.jpg"},
//     {"imgURL": "https://farm1.staticflickr.com/559/18505329075_2537e321d0_k.jpg"},
//     {"imgURL": "https://farm1.staticflickr.com/441/19731484683_220280a0c5_k.jpg"}
//   ]
//   },
//
//   { "albumName": 'portofino',
//     "albumTitle": 'Portofino',
//     "coverPhoto": "https://farm1.staticflickr.com/256/20373262746_63b39c66a1_k.jpg",
//     "photos": [
//     {"photo1": "https://farm1.staticflickr.com/256/20373262746_63b39c66a1_k.jpg"},
//     {"photo2": "https://farm1.staticflickr.com/439/18993241476_f2cb977219_k.jpg"},
//     {"photo3": "https://farm1.staticflickr.com/335/19022524291_bd9f2ffbac_k.jpg"}
//   ]
//   },
//
//   { "albumName": 'mediterranean-cruise',
//     "albumTitle": 'Mediterranean Cruise',
//     "coverPhoto": "https://farm1.staticflickr.com/262/18397365114_4a55785b44_k.jpg",
//     "photos": [
//     {"photo1": "https://farm1.staticflickr.com/262/18397365114_4a55785b44_k.jpg"},
//     {"photo2": "https://farm1.staticflickr.com/255/19014486562_897da17a80_k.jpg"},
//     {"photo3": "https://farm4.staticflickr.com/3693/20214151720_097152c33a_k.jpg"}
//   ]
//   },
//
//   { "albumName": 'cinque-terre',
//     "albumTitle": 'Cinque-Terre',
//     "coverPhoto": "https://farm4.staticflickr.com/3808/20213621470_9b2680af99_k.jpg",
//     "photos": [
//     {"photo1": "https://farm4.staticflickr.com/3808/20213621470_9b2680af99_k.jpg"},
//     {"photo2": "https://farm1.staticflickr.com/414/20213810398_8ee71ed276_k.jpg"},
//     {"photo3": "https://farm1.staticflickr.com/452/20215897288_a2044a1f32_k.jpg"}
//   ]
//   },
//
//   { "albumName": 'rockwell',
//     "albumTitle": 'Rockwell',
//     "coverPhoto": "https://farm1.staticflickr.com/419/20416106222_ae46ebdd77_b.jpg",
//     "photos": [
//     {"photo1": "https://farm1.staticflickr.com/419/20416106222_ae46ebdd77_b.jpg"},
//     {"photo2": "https://farm1.staticflickr.com/274/20416081882_6ba23daaab_b.jpg"},
//     {"photo3": "https://farm1.staticflickr.com/452/20236740438_76078836bd_b.jpg"}
//   ]
//   }
// ];

// // myAlbums object consists of 6 arrays: Madrid, Toledo, Portofino, Cruise, CinqueTerre, and Rockwell
// var myAlbums = {
//     madrid: [
//     "https://farm8.staticflickr.com/7785/18318666575_7ec4dd2b9f_k.jpg",
//     "https://farm1.staticflickr.com/530/18318662495_a67a154e38_k.jpg",
//     "https://farm1.staticflickr.com/436/18132341479_6471588337_k.jpg"
//   ],
//   toledo: [
//     "https://farm1.staticflickr.com/530/18318662495_a67a154e38_k.jpg",
//     "https://farm1.staticflickr.com/559/18505329075_2537e321d0_k.jpg",
//     "https://farm1.staticflickr.com/441/19731484683_220280a0c5_k.jpg"
//   ],
//   portofino: [
//     "https://farm1.staticflickr.com/256/20373262746_63b39c66a1_k.jpg",
//     "https://farm1.staticflickr.com/439/18993241476_f2cb977219_k.jpg",
//     "https://farm1.staticflickr.com/335/19022524291_bd9f2ffbac_k.jpg"
//   ],
//   cruise: [
//     "https://farm1.staticflickr.com/262/18397365114_4a55785b44_k.jpg",
//     "https://farm1.staticflickr.com/255/19014486562_897da17a80_k.jpg",
//     "https://farm4.staticflickr.com/3693/20214151720_097152c33a_k.jpg"
//   ],
//   cinqueTerre: [
//     "https://farm4.staticflickr.com/3808/20213621470_9b2680af99_k.jpg",
//     "https://farm1.staticflickr.com/414/20213810398_8ee71ed276_k.jpg",
//     "https://farm1.staticflickr.com/452/20215897288_a2044a1f32_k.jpg"
//   ],
//   rockwell: [
//     "https://farm1.staticflickr.com/274/20416081882_6ba23daaab_b.jpg",
//     "https://farm1.staticflickr.com/419/20416106222_ae46ebdd77_b.jpg",
//     "https://farm1.staticflickr.com/452/20236740438_76078836bd_b.jpg"
//   ]
// };

// myAlbums array consists of 6 objects: Madrid, Toledo, Portofino, Cruise, CinqueTerre, and Rockwell
var myAlbums = [
  {
    albumName: 'Madrid',
    photo1: "https://farm8.staticflickr.com/7785/18318666575_7ec4dd2b9f_k.jpg",
    photo2: "https://farm1.staticflickr.com/530/18318662495_a67a154e38_k.jpg",
    photo3: "https://farm1.staticflickr.com/436/18132341479_6471588337_k.jpg"
  },
  {
    albumName: "Toledo",
    photo1: "https://farm1.staticflickr.com/262/20323763876_5f5c579dd8_b.jpg",
    photo2: "https://farm1.staticflickr.com/559/18505329075_2537e321d0_k.jpg",
    photo3: "https://farm1.staticflickr.com/441/19731484683_220280a0c5_k.jpg"
  },
  {
    albumName: "Portofino",
    photo1: "https://farm1.staticflickr.com/256/20373262746_63b39c66a1_k.jpg",
    photo2: "https://farm1.staticflickr.com/439/18993241476_f2cb977219_k.jpg",
    photo3: "https://farm1.staticflickr.com/335/19022524291_bd9f2ffbac_k.jpg"
  },
  {
    albumName: "Mediterranean Cruise",
    photo1: "https://farm1.staticflickr.com/262/18397365114_4a55785b44_k.jpg",
    photo2: "https://farm1.staticflickr.com/255/19014486562_897da17a80_k.jpg",
    photo3: "https://farm4.staticflickr.com/3693/20214151720_097152c33a_k.jpg"
  },
  {
    albumName: "Cinque Terre",
    photo1: "https://farm4.staticflickr.com/3808/20213621470_9b2680af99_k.jpg",
    photo2: "https://farm1.staticflickr.com/414/20213810398_8ee71ed276_k.jpg",
    photo3: "https://farm1.staticflickr.com/452/20215897288_a2044a1f32_k.jpg"
  },
  {
    albumName: "Rockwell",
    photo1: "https://farm1.staticflickr.com/419/20416106222_ae46ebdd77_b.jpg",
    photo2: "https://farm1.staticflickr.com/274/20416081882_6ba23daaab_b.jpg",
    photo3: "https://farm1.staticflickr.com/452/20236740438_76078836bd_b.jpg"
  }
];
