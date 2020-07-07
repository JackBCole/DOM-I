const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const navItems = document.querySelectorAll('a')
navItems[0].textContent = 'services'
navItems[1].textContent = 'product'
navItems[2].textContent = 'vision'
navItems[3].textContent = 'features'
navItems[4].textContent = 'about'
navItems[5].textContent = 'contact'

navItems.forEach(element => {
  element.style.color = 'green';
});

// var help = document.createElement('help')
// navItems.prepend(help)

 const domAwesomeness = document.querySelector('.cta-text h1')
//console.log(domAwesomeness)
domAwesomeness.textContent = siteContent.cta.h1

const button1 = document.querySelector('.cta-text button')
button1.textContent = siteContent.cta.button
//console.log(button1)

const snippet = document.getElementById("cta-img")
snippet.setAttribute('src', 'img/header-img.png')

document.querySelector(".container .main-content .top-content .text-content").className = 'features-content'

const featuresTitle = document.querySelector(".features-content h4")
featuresTitle.textContent = siteContent["main-content"]["features-h4"]

const featuresAbout = document.querySelector(".features-content p")
featuresAbout.textContent = siteContent["main-content"]["features-content"]


const aboutTitle = document.querySelector(".text-content h4")
 aboutTitle.textContent = siteContent["main-content"]["about-h4"]
 
 const aboutContent = document.querySelector(".text-content p")
// console.log(aboutContent)
aboutContent.textContent = siteContent["main-content"]["about-content"]



const accent = document.getElementById("middle-img")
accent.setAttribute('src', 'img/mid-page-accent.jpg')

document.querySelector(".container .main-content .bottom-content .text-content").className = 'services-content'

 const servicesTitle = document.querySelector(".services-content h4")
 servicesTitle.textContent = siteContent["main-content"]["services-h4"]

 const servicesAbout = document.querySelector(".services-content p")
 servicesAbout.textContent = siteContent["main-content"]["services-content"]

 document.querySelector(".container .main-content .bottom-content .text-content").className = 'product-content'

 const productTitle = document.querySelector(".product-content h4")
 productTitle.textContent = siteContent["main-content"]["product-h4"]

const productAbout = document.querySelector(".product-content p")
productAbout.textContent = siteContent["main-content"]["product-content"]


document.querySelector(".container .main-content .bottom-content .text-content").className = 'vision-content'

const visionTitle = document.querySelector(".vision-content h4")
visionTitle.textContent = siteContent["main-content"]["vision-h4"]

const visionAbout = document.querySelector(".vision-content p")
visionAbout.textContent = siteContent["main-content"]["vision-content"]

const bottomContact = document.querySelector(".contact h4")
bottomContact.textContent = siteContent.contact["contact-h4"]

document.querySelectorAll(".container .contact p").className = 'p'


const contactAddress = document.querySelector(".contact p")
contactAddress.textContent = siteContent.contact.address

const contactItem = document.querySelector(".container .contact p")
contactItem.forEach(element => {
  element.className += 'p1' , 'p2', 'p3';
});


const contactPhone = document.querySelector(".contact p1")
contactPhone.textContent = siteContent.contact.phone

const contactEmail = document.querySelector(".contact p2")
contactEmail.textContent = siteContent.contact.email


const copyright = document.querySelector("footer p")
copyright.textContent = siteContent.footer.copyright



