//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
function instantiateBookReader(selector, extraOptions) {
  selector = selector || '#BookReader';
  extraOptions = extraOptions || {};
  var options = {
    data: [
      [
        { width: 1275, height: 1650,
          uri: '../../../assets/books/alternate_art_history/images/0.jpg' },
      ],
      [
        { width: 1275, height: 1650,
          uri: '../../../assets/books/alternate_art_history/images/1.jpg' },
        { width: 1275, height: 1650,
          uri: '../../../assets/books/alternate_art_history/images/2.jpg' },
      ],
      [
        { width: 1275, height: 1650,
          uri: '../../../assets/books/alternate_art_history/images/3.jpg' },
        { width: 1275, height: 1650,
          uri: '../../../assets/books/alternate_art_history/images/4.jpg' },
      ],
      [
        { width: 1275, height: 1650,
          uri: '../../../assets/books/alternate_art_history/images/5.jpg' },
        { width: 1275, height: 1650,
          uri: '../../../assets/books/alternate_art_history/images/6.jpg' },
      ],
      [
        { width: 1275, height: 1650,
          uri: '../../../assets/books/alternate_art_history/images/7.jpg' },
        { width: 1275, height: 1650,
          uri: '../../../assets/books/alternate_art_history/images/8.jpg' },
      ],
      [
        { width: 1275, height: 1650,
          uri: '../../../assets/books/alternate_art_history/images/9.jpg' },
        { width: 1275, height: 1650,
          uri: '../../../assets/books/alternate_art_history/images/10.jpg' },
      ],
      [
        { width: 1275, height: 1650,
          uri: '../../../assets/books/alternate_art_history/images/11.jpg' },
        { width: 1275, height: 1650,
          uri: '../../../assets/books/alternate_art_history/images/12.jpg' },
      ],
      [
        { width: 1275, height: 1650,
          uri: '../../../assets/books/alternate_art_history/images/13.jpg' },
        { width: 1275, height: 1650,
          uri: '../../../assets/books/alternate_art_history/images/14.jpg' },
      ],
      [
        { width: 1275, height: 1650,
          uri: '../../../assets/books/alternate_art_history/images/15.jpg' },
        { width: 1275, height: 1650,
          uri: '../../../assets/books/alternate_art_history/images/16.jpg' },
      ],
      [
        { width: 1275, height: 1650,
          uri: '../../../assets/books/alternate_art_history/images/17.jpg' },
        { width: 1275, height: 1650,
          uri: '../../../assets/books/alternate_art_history/images/18.jpg' },
      ],
      [
        { width: 1275, height: 1650,
          uri: '../../../assets/books/alternate_art_history/images/19.jpg' },
        { width: 1275, height: 1650,
          uri: '../../../assets/books/alternate_art_history/images/20.jpg' },
      ],
      [
        { width: 1275, height: 1650,
          uri: '../../../assets/books/alternate_art_history/images/21.jpg' },
        { width: 1275, height: 1650,
          uri: '../../../assets/books/alternate_art_history/images/22.jpg' },
      ],
      [
        { width: 1275, height: 1650,
          uri: '../../../assets/books/alternate_art_history/images/23.jpg' },
        { width: 1275, height: 1650,
          uri: '../../../assets/books/alternate_art_history/images/24.jpg' },
      ],
      [
        { width: 1275, height: 1650,
          uri: '../../../assets/books/alternate_art_history/images/25.jpg' },
        { width: 1275, height: 1650,
          uri: '../../../assets/books/alternate_art_history/images/26.jpg' },
      ],
      [
        { width: 1275, height: 1650,
          uri: '../../../assets/books/alternate_art_history/images/27.jpg' },
        { width: 1275, height: 1650,
          uri: '../../../assets/books/alternate_art_history/images/28.jpg' },
      ],
      [
        { width: 1275, height: 1650,
          uri: '../../../assets/books/alternate_art_history/images/29.jpg' },
        { width: 1275, height: 1650,
          uri: '../../../assets/books/alternate_art_history/images/30.jpg' },
      ],
      [
        { width: 1275, height: 1650,
          uri: '../../../assets/books/alternate_art_history/images/31.jpg' },
        { width: 1275, height: 1650,
          uri: '../../../assets/books/alternate_art_history/images/32.jpg' },
      ],
      [
        { width: 1275, height: 1650,
          uri: '../../../assets/books/alternate_art_history/images/33.jpg' },
        { width: 1275, height: 1650,
          uri: '../../../assets/books/alternate_art_history/images/34.jpg' },
      ],
      [
        { width: 1275, height: 1650,
          uri: '../../../assets/books/alternate_art_history/images/35.jpg' },
        { width: 1275, height: 1650,
          uri: '../../../assets/books/alternate_art_history/images/36.jpg' },
      ],
      [
        { width: 1275, height: 1650,
          uri: '../../../assets/books/alternate_art_history/images/37.jpg' },
        { width: 1275, height: 1650,
          uri: '../../../assets/books/alternate_art_history/images/38.jpg' },
      ],
      [
        { width: 1275, height: 1650,
          uri: '../../../assets/books/alternate_art_history/images/39.jpg' },
        { width: 1275, height: 1650,
          uri: '../../../assets/books/alternate_art_history/images/40.jpg' },
      ],
      [
        { width: 1275, height: 1650,
          uri: '../../../assets/books/alternate_art_history/images/41.jpg' },
        { width: 1275, height: 1650,
          uri: '../../../assets/books/alternate_art_history/images/42.jpg' },
      ],
      [
        { width: 1275, height: 1650,
          uri: '../../../assets/books/alternate_art_history/images/43.jpg' },
        { width: 1275, height: 1650,
          uri: '../../../assets/books/alternate_art_history/images/44.jpg' },
      ],
      [
        { width: 1275, height: 1650,
          uri: '../../../assets/books/alternate_art_history/images/45.jpg' },
        { width: 1275, height: 1650,
          uri: '../../../assets/books/alternate_art_history/images/46.jpg' },
      ],
      [
        { width: 1275, height: 1650,
          uri: '../../../assets/books/alternate_art_history/images/47.jpg' },
      ]
    ],

    // Book title and the URL used for the book title link
    bookTitle: '',
    bookUrl: '',
    bookUrlText: '',
    bookUrlTitle: '',

    // thumbnail is optional, but it is used in the info dialog
    thumbnail: '../../../assets/books/alternate_art_history/images/0.jpg',
    // Metadata is optional, but it is used in the info dialog
    metadata: [
      {label: 'Title', value: 'Alternate Art History'},
      {label: 'Compiled by', value: 'Shannon Marie Robinson'},
    ],

    // Override the path used to find UI images
    imagesBaseURL: '../../../assets/BookReader/images/',

    ui: 'full', // embed, full (responsive)

    el: selector,

    startFullscreen: false,

    showToolbar: false,
  };
  $.extend(options, extraOptions);
  var br = new BookReader(options);
  br.init();
}