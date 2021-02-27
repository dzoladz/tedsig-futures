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
        { width: 3750, height: 5381,
          uri: '/assets/books/alexandria_business_proposal/images/0.jpg' },
      ],
      [
        { width: 3750, height: 5381,
          uri: '/assets/books/alexandria_business_proposal/images/1.jpg' },
        { width: 3750, height: 5381,
          uri: '/assets/books/alexandria_business_proposal/images/2.jpg' },
      ],
      [
        { width: 3750, height: 5381,
          uri: '/assets/books/alexandria_business_proposal/images/3.jpg' },
        { width: 3750, height: 5381,
          uri: '/assets/books/alexandria_business_proposal/images/4.jpg' },
      ],
      [
        { width: 3750, height: 5381,
          uri: '/assets/books/alexandria_business_proposal/images/5.jpg' },
        { width: 3750, height: 5381,
          uri: '/assets/books/alexandria_business_proposal/images/6.jpg' },
      ],
      [
        { width: 3750, height: 5381,
          uri: '/assets/books/alexandria_business_proposal/images/7.jpg' },
        { width: 3750, height: 5381,
          uri: '/assets/books/alexandria_business_proposal/images/8.jpg' },
      ],
      [
        { width: 3750, height: 5381,
          uri: '/assets/books/alexandria_business_proposal/images/9.jpg' },
        { width: 3750, height: 5381,
          uri: '/assets/books/alexandria_business_proposal/images/10.jpg' },
      ],
      [
        { width: 3750, height: 5381,
          uri: '/assets/books/alexandria_business_proposal/images/11.jpg' },
        { width: 3750, height: 5381,
          uri: '/assets/books/alexandria_business_proposal/images/12.jpg' },
      ]
    ],

    // Book title and the URL used for the book title link
    bookTitle: '',
    bookUrl: '',
    bookUrlText: '',
    bookUrlTitle: '',

    // thumbnail is optional, but it is used in the info dialog
    thumbnail: '/assets/books/alexandria_business_proposal/images/0.jpg',
    // Metadata is optional, but it is used in the info dialog
    metadata: [
      {label: 'Title', value: 'Alexandr.ia Business Proposal'},
      {label: 'Compiled by', value: 'Liz Lang & Calvin Cleary'},
    ],

    // Override the path used to find UI images
    imagesBaseURL: '/assets/BookReader/images/',

    ui: 'full', // embed, full (responsive)

    el: selector,

    startFullscreen: false,

    showToolbar: false,
  };
  $.extend(options, extraOptions);
  var br = new BookReader(options);
  br.init();
}