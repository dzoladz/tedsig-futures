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
  div[data-id="business_proposal"] button.twopg { display: initial; }
  div[data-id="pitch_deck"] button.book_left .icon-left-arrow { transform: rotate(90deg); }
  div[data-id="pitch_deck"] button.book_right .icon-left-arrow { transform: rotate(-90deg); }
  div[data-id="internal_use_only"] button.book_left .icon-left-arrow { transform: rotate(90deg); }
  div[data-id="internal_use_only"] button.book_right .icon-left-arrow { transform: rotate(-90deg); }
  button.twopg { display: none; }
`);

function updatePitchDeck() {
  let lbuttonTitle = document.querySelector('[data-id="pitch_deck"] .book_left');
  lbuttonTitle.setAttribute('title', 'Previous Slide');
  let lbutton = document.querySelector('[data-id="pitch_deck"] .book_left .tooltip');
  lbutton.innerHTML = 'Previous Slide'

  let rbuttonTitle = document.querySelector('[data-id="pitch_deck"] .book_right');
  rbuttonTitle.setAttribute('title', 'Next Slide');
  let rbutton = document.querySelector('[data-id="pitch_deck"] .book_right .tooltip');
  rbutton.innerHTML = 'Next Slide'
}

function updateInternalUseOnly() {
  let lbuttonTitle = document.querySelector('[data-id="internal_use_only"] .book_left');
  lbuttonTitle.setAttribute('title', 'Previous Slide');
  let lbutton = document.querySelector('[data-id="internal_use_only"] .book_left .tooltip');
  lbutton.innerHTML = 'Previous Slide'

  let rbuttonTitle = document.querySelector('[data-id="internal_use_only"] .book_right');
  rbuttonTitle.setAttribute('title', 'Next Slide');
  let rbutton = document.querySelector('[data-id="internal_use_only"] .book_right .tooltip');
  rbutton.innerHTML = 'Next Slide'
}

setTimeout(updatePitchDeck, 1000);
setTimeout(updateInternalUseOnly, 1000);