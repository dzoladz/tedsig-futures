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

    onePage: {
    /** @type {AutoFitValues} */
        autofit: 'width',
    },

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

// -------------------------------------------------
// Utility function to add CSS
// IA BookReader control options ineffective
// -------------------------------------------------
function adjustControls(stylesheet) {
  const style = document.createElement('style');
  style.textContent = stylesheet;
  document.head.append(style);
}

adjustControls(`
  div[data-id="hair_catalog_assessment"] button.book_left .icon-left-arrow { transform: rotate(90deg); }
  div[data-id="hair_catalog_assessment"] button.book_right .icon-left-arrow { transform: rotate(-90deg); }
  button.twopg { display: none; }
`);

function updateHairCatalogAssessment() {
  let lbuttonTitle = document.querySelector('[data-id="hair_catalog_assessment"] .book_left');
  lbuttonTitle.setAttribute('title', 'Previous Slide');
  let lbutton = document.querySelector('[data-id="hair_catalog_assessment"] .book_left .tooltip');
  lbutton.innerHTML = 'Previous Slide'

  let rbuttonTitle = document.querySelector('[data-id="hair_catalog_assessment"] .book_right');
  rbuttonTitle.setAttribute('title', 'Next Slide');
  let rbutton = document.querySelector('[data-id="hair_catalog_assessment"] .book_right .tooltip');
  rbutton.innerHTML = 'Next Slide'
}

setTimeout(updateHairCatalogAssessment, 1000);
