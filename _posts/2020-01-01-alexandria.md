---
layout: post
title: Alexandr.ia
description: Liz Lang<br/>Calvin Cleary
show_banner_image: false
banner_image: assets/images/no-image.svg
banner_image_description: no image available
tile_image: assets/images/alexandria-tile.png
tile_image_description:
show_tile: true
show_in_menu: true
authors:
  - {
    name: "Liz Lang",
    email: "emlang@owu.edu",
    affiliation: "Ohio Wesleyan University, Beeghly Library",
    twitter: ,
    github: ,
    orcid: ,
    website: 
    }
  - {
    name: "Calvin Cleary",
    email: "cjcleary@owu.edu",
    affiliation: "Ohio Wesleyan University, Beeghly Library",
    twitter: ,
    github: ,
    orcid: ,
    website: 
    }
    
---

Colleges and universities across the country are in dire financial straits thanks to a combination of shocks that culminated in the COVID-19 pandemic. Because of this, they are increasingly susceptible to predatory business practices. This had already started with the rise of adjunct faculty replacing tenure-track positions, but financial pressures in a post-coronavirus world may exacerbate this trend. Could libraries be susceptible to the organizational superstructure of Silicon Valley companies? Essentially: What would it look like if libraries adopted a sharing economy business model?

Alexandr.ia is a multimedia look at the future of precarity in academic libraries in the form of a satirical pitch to Silicon Valley investors for an app called Alexandr.ia.

<hr/>

{% include inline_bookreader.html
    book_directory='alexandria_business_proposal'
    data-id='business_proposal'
%}

{% include inline_bookreader.html
    book_directory='alexandria_pitch_deck'
    data-id='pitch_deck'
    height='470px'
%}

<hr class="hr-divider"/>

{% include inline_image_half_width.html
    image='open_library_manifesto.jpg'
    description='open library manifesto'
    label_key=''
    label_value=''
    label_url=''
    float='left'
    data_id='open-letter'
%}

<div id="open-library-collective">
    <p>Call it a leak. A data-dump. A ‘hack’ if you want to be all scare-tacticsy about it. However the information got out there, it should be a call to arms for every single librarian: Alexandr.ia and companies like it are going to kill this profession, if you let them.</p>
    <p>You probably know about Alexandr.ia from its ads, or maybe a cutesy story on <em>NPR</em> or the <em>Wall Street Journal</em> about the future of on-demand work. Maybe you heard stats cited about how it reduces unemployment rolls and idly thought: Huh, that sounds good. Low unemployment good; therefore, company good.</p>
    <p>But have you asked yourself why income inequality has gone up and salaries have stayed flat despite those unemployment numbers? Why does everything feel so unstable?</p>
    <p>It’s because companies like Alexandr.ia, Uber, and Fiverr have built an economy on quicksand.</p>
    <p>So, we thought we’d share some of their internal documents, uploaded to us by one of the many anonymous ~<em>contractors</em>~ they employ in various roles to keep full-time staff low and look shiny and efficient for the Wall Street ghouls. We’re sifting through a lot of documents, since we don’t want to dox anyone, so let’s start simple: Pitch deck and business proposal.</p>
    <p>Boring, right? What if we told you that we <em>also</em> had access to some of their drafts, which include some... enlightening comments from CEO Aaron Morrison and Marketing VP Quinta Jackson? We’ll get into the nitty gritty of the financial documents soon, but we thought that this would be a good place to start demonstrating the Big Lie behind gig employment.</p>
    <p>The real danger to library workers isn’t in automation; it’s in casualization. It’s needing two incomes to make a mortgage, then three, then four just to pay rent. It’s needing to always be on call to your employer, to be answering questions on Alexandr.ia at stoplights on your Lyft shifts, while your employer owes you nothing -- no healthcare, no benefits, no promises. They don’t want you out of work; they want you <em>always working</em>.</p>
    <p>Remember: Information wants to be free and the internet wants to be open. Don’t let companies like Alexandr.ia build walls where librarians should be building bridges. We stop this by collaborating, by building organizations that protect library workers instead of employers.</p>
    <p>We’re watching, Alexandr.ia. Good luck with your IPO.</p>
    <p>Love & friendship,<br>
    The Open Libraries Collective</p>
</div>

{% include inline_bookreader.html
    book_directory='alexandria_pitch_internal_use_only'
    data-id='internal_use_only'
    height='500px'
%}

<script>
    let letter = document.querySelector('[data-id="open-letter"]');
    letter.onclick = function openLetter() {
        window.location.assign('/assets/pdf/Open_Library_Manifesto.pdf')
    }

</script>