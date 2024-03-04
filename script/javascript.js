"use strict";

// geting the data

const data = fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
      console.log("Fetched data:", data);
    getAndUpdateData(data);
  })
  .catch((error) => {
    console.log("Error fetching data: ", error);
  });

function getAndUpdateData(data) {
  // Presentation
  let [{ country, city }] = data.location;
  let descriptionT = document.querySelector(".description");
      descriptionT.innerHTML = `Hi, I'm ${data.name}. A passionate FrontEnd Developer based in ${country}, ${city}. 📍`;

  // Description
  let h4Element = (document.querySelector(".text-side h4"));
      h4Element.innerHTML = `Front-end Developer <br> based in ${country}, ${city} 📍`;
  let [{ description: description1 }, { description: description2 }] = data.about;
  let pElement = (document.querySelector(".text-side p"));
      pElement.innerHTML = `${description1} </br> ${description2}`;

  // Socials
  let [{...linkedin}, {...github}] = data.socials;
  let linkedinLink = document.querySelector('[aria-label="linkedin"]');
      linkedinLink.setAttribute("href", `${linkedin.link}`);
  let githubLink = document.querySelector('[aria-label="github"]');
      githubLink.setAttribute("href", `${github.link}`);

  // contact contact__info"
  let locationInfo = document.querySelector('.contact__info p');
      locationInfo.innerHTML = `${country}, ${city}`;
  
  let mailInfo = document.querySelector(".contact__info a");
      mailInfo.innerHTML = `${data.email}`;
      mailInfo.setAttribute('href', `mailto:${data.email}`)    
}

// mobile menu toggle
function toggleMenu() {
  const mobileNav = document.querySelector('.mobile-nav');
        mobileNav.classList.toggle("open-menu");
}
