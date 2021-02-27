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
          uri: '/assets/books/hair_catalog_assessment/images/0.jpg' },
      ],
      [
        { width: 1500, height: 844,
          uri: '/assets/books/hair_catalog_assessment/images/1.jpg' },
      ],
      [
        { width: 1500, height: 844,
          uri: '/assets/books/hair_catalog_assessment/images/2.jpg' },
      ],
      [
        { width: 1500, height: 844,
          uri: '/assets/books/hair_catalog_assessment/images/3.jpg' },
      ],
      [
        { width: 1500, height: 844,
          uri: '/assets/books/hair_catalog_assessment/images/4.jpg' },
      ],
      [
        { width: 1500, height: 844,
          uri: '/assets/books/hair_catalog_assessment/images/5.jpg' },
      ],
      [
        { width: 1500, height: 844,
          uri: '/assets/books/hair_catalog_assessment/images/6.jpg' },
      ],
      [
        { width: 1500, height: 844,
          uri: '/assets/books/hair_catalog_assessment/images/7.jpg' },
      ],
      [
        { width: 1500, height: 844,
          uri: '/assets/books/hair_catalog_assessment/images/8.jpg' },
      ],
      [
        { width: 1500, height: 844,
          uri: '/assets/books/hair_catalog_assessment/images/9.jpg' },
      ],
      [
        { width: 1500, height: 844,
          uri: '/assets/books/hair_catalog_assessment/images/10.jpg' },
      ],
      [
        { width: 1500, height: 844,
          uri: '/assets/books/hair_catalog_assessment/images/11.jpg' },
      ],
      [
        { width: 1500, height: 844,
          uri: '/assets/books/hair_catalog_assessment/images/12.jpg' },
      ],
      [
        { width: 1500, height: 844,
          uri: '/assets/books/hair_catalog_assessment/images/13.jpg' },
      ],
    ],

    // Book title and the URL used for the book title link
    bookTitle: '',
    bookUrl: '',
    bookUrlText: '',
    bookUrlTitle: '',

    // thumbnail is optional, but it is used in the info dialog
    thumbnail: '/assets/books/hair_catalog_assessment/images/0.jpg',
    // Metadata is optional, but it is used in the info dialog
    metadata: [
      {label: 'Title', value: 'Hair Catalog - A Collection Assessment'},
      {label: 'Compiled by', value: 'Shannon Marie Robinson'},
    ],

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