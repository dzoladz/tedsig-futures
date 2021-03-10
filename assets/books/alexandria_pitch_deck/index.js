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
        { width: 1500, height: 844,
          uri: '/assets/books/alexandria_pitch_deck/images/0.jpg' },
      ],
      [
        { width: 1500, height: 844,
          uri: '/assets/books/alexandria_pitch_deck/images/1.jpg' },
        { width: 1500, height: 844,
          uri: '/assets/books/alexandria_pitch_deck/images/2.jpg' },
      ],
      [
        { width: 1500, height: 844,
          uri: '/assets/books/alexandria_pitch_deck/images/3.jpg' },
        { width: 1500, height: 844,
          uri: '/assets/books/alexandria_pitch_deck/images/4.jpg' },
      ],
      [
        { width: 1500, height: 844,
          uri: '/assets/books/alexandria_pitch_deck/images/5.jpg' },
        { width: 1500, height: 844,
          uri: '/assets/books/alexandria_pitch_deck/images/6.jpg' },
      ],
      [
        { width: 1500, height: 844,
          uri: '/assets/books/alexandria_pitch_deck/images/7.jpg' },
        { width: 1500, height: 844,
          uri: '/assets/books/alexandria_pitch_deck/images/8.jpg' },
      ],
      [
        { width: 1500, height: 844,
          uri: '/assets/books/alexandria_pitch_deck/images/9.jpg' },
        { width: 1500, height: 844,
          uri: '/assets/books/alexandria_pitch_deck/images/10.jpg' },
      ],
      [
        { width: 1500, height: 844,
          uri: '/assets/books/alexandria_pitch_deck/images/11.jpg' },
        { width: 1500, height: 844,
          uri: '/assets/books/alexandria_pitch_deck/images/12.jpg' },
      ],
      [
        { width: 1500, height: 844,
          uri: '/assets/books/alexandria_pitch_deck/images/13.jpg' },
      ]
    ],

    // Book title and the URL used for the book title link
    bookTitle: '',
    bookUrl: '',
    bookUrlText: '',
    bookUrlTitle: '',

    // thumbnail is optional, but it is used in the info dialog
    thumbnail: '/assets/books/alexandria_pitch_deck/images/0.jpg',
    // Metadata is optional, but it is used in the info dialog
    metadata: [
      {label: 'Title', value: 'Alexandr.ia Pitch Deck'},
      {label: 'Compiled by', value: 'Liz Lang & Calvin Cleary'},
    ],

    onePage: {
    /** @type {AutoFitValues} */
        autofit: 'width',
    },

    // Override the path used to find UI images
    imagesBaseURL: '/assets/BookReader/images/',

    ui: 'full', // embed, full (responsive)

    el: selector,

    startFullscreen: false,

    defaults: 'mode/1up',

    showToolbar: false,

  };
  $.extend(options, extraOptions);
  var br = new BookReader(options);
  br.init();
}

// See alexandria_business_proposal/index.js
// for additional JS to Book Reader instances