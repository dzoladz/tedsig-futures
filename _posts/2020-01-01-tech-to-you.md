---
layout: post
title: Tech to You
description: Myiesha Speight<br/>Bria Sinnott
show_banner_image: false
banner_image: assets/images/no-image.svg
banner_image_description: no image available
tile_image: assets/images/planet-tile.jpeg
tile_image_description:
show_tile: true
show_in_menu: true
authors:
  - {
    name: "Myiesha Speight",
    email: "mspeight@towson.edu",
    affiliation: "Towson University, Albert S. Cook Library",
    twitter: ,
    github: ,
    orcid: ,
    website:
    }
  - {
    name: "Bria Sinnott",
    email: "bsinnott@towson.edu",
    affiliation: "Towson University, Albert S. Cook Library",
    twitter: ,
    github: ,
    orcid: ,
    website:
    }

---

<div class="sway" style="width: 100%; height: 500px; margin-bottom: 25px;"> 

<iframe src="https://sway.office.com/s/WlTb61kGUB4JiKei/embed" frameborder="0" marginheight="0" marginwidth="0" max-width="100%" sandbox="allow-forms allow-modals allow-orientation-lock allow-popups allow-same-origin allow-scripts" scrolling="no" style="border: none; width: 100%; height: inherit; height: -webkit-fill-available; height: fill-available;" allowfullscreen mozallowfullscreen msallowfullscreen webkitallowfullscreen></iframe>

</div>


<script>
var distance = ($('.sway').offset().top) - 80;

function noScroll() {
  window.scrollTo(0, distance);
}

$(window).scroll(function() {
    if ( $(this).scrollTop() >= distance ) {
        window.addEventListener('scroll', noScroll);
    } else {
        window.removeEventListener('scroll', noScroll);
    }
});

</script>