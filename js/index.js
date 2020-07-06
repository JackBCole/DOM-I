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

 const domAwesomeness = document.querySelector('.cta-text h1')
//console.log(domAwesomeness)
domAwesomeness.textContent = siteContent.cta.h1

const button1 = document.querySelector('.cta-text button')
button1.textContent = siteContent.cta.button
//console.log(button1)

const snippet = document.getElementById("cta-img")
snippet.setAttribute('src', 'img/header-img.png')

const featuresTitle = document.querySelector(".text-content h4")
featuresTitle.textContent = siteContent["main-content"]["features-h4"]

const featuresAbout = document.querySelector(".text-content p")
featuresAbout.textContent = siteContent["main-content"]["features-content"]


const aboutTitle = document.querySelector(".text-content1 h4")
aboutTitle.textContent = siteContent["main-content"]["about-h4"]
 
const aboutContent = document.querySelector(".text-content1 p")
console.log(aboutContent)
aboutContent.textContent = siteContent["main-content"]["about-content"]

const accent = document.getElementById("middle-img")
accent.setAttribute('src', 'img/mid-page-accent.jpg')

const servicesTitle = document.querySelector(".text-content2 h4")
servicesTitle.textContent = siteContent["main-content"]["services-h4"]

const servicesAbout = document.querySelector(".text-content2 p")
servicesAbout.textContent = siteContent["main-content"]["services-content"]

const productTitle = document.querySelector(".text-content3 h4")
productTitle.textContent = siteContent["main-content"]["product-h4"]

const productAbout = document.querySelector(".text-content3 p")
productAbout.textContent = siteContent["main-content"]["product-content"]

const visionTitle = document.querySelector(".text-content4 h4")
visionTitle.textContent = siteContent["main-content"]["vision-h4"]

const visionAbout = document.querySelector(".text-content4 p")
visionAbout.textContent = siteContent["main-content"]["vision-content"]





const bottomContact = document.querySelector(".contact h4")
bottomContact.textContent = siteContent.contact["contact-h4"]

const contactAddress = document.querySelector(".contact p")
contactAddress.textContent = siteContent.contact.address

const contactPhone = document.querySelector(".contact .p1")
contactPhone.textContent = siteContent.contact.phone

const contactEmail = document.querySelector(".contact .p2")
contactEmail.textContent = siteContent.contact.email


const copyright = document.querySelector("footer p")
copyright.textContent = siteContent.footer.copyright

