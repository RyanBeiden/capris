// Main Capri Array to use for index.html & capris.html
// Star Ratings use integers 1 - 5

const capris = [{
    name: "Cargopris",
    description: "Made with the strongest cargo pockets.",
    imageUrl: "/images/capri-1.jpg",
    price: 45,
    starRating: 3,
    size: ["XS", "M", "XL"]
  },
  {
    name: "Hammerpris",
    description: "Can't touch these 'pris",
    imageUrl: "/images/capri-2.jpg",
    price: 50,
    starRating: 4,
    size: ["S", "M", "L"]
  },
  {
    name: "Casualpris",
    description: "For any occasion.",
    imageUrl: "/images/capri-3.jpeg",
    price: 5,
    starRating: 1,
    size: ["XS", "M", "L", "XL"]
  },
  {
    name: "Armypris",
    description: "May include a parachute attachment.",
    imageUrl: "/images/capri-4.jpg",
    price: 300,
    starRating: 5,
    size: ["S", "M"]
  },
  {
    name: "Ca-jeans",
    description: "Longer, better jorts.",
    imageUrl: "/images/capri-5.jpg",
    price: 205,
    starRating: 5,
    size: ["M", "L", "XL"]
  },
  {
    name: "Caprisweats",
    description: "A quarantine kind of Capri.",
    imageUrl: "/images/capri-6.jpg",
    price: 15,
    starRating: 2,
    size: ["M"]
  },
];

// Data for history carrousel 

const capriHistory = [

  {
    imageUrl: "/images/capri-7.jpg",
    timePeriod: "1950s",
    description: "Capris were created by Sonja de Lennart in the early 1950s. It was apart of the 'Capri Collection'. Named after the isle of capri where her family would holiday",
    numberOneSong: "Gordon Jenkins & The Weavers-Goodnight Irene"
  },
  {
    imageUrl: "/images/capri-8.jpg",
    timePeriod: "1960s",
    description: "Mary Tyler Moore popularized Capri pants in the 60's on The Dick Van Dyke show",
    numberOneSong: "Percy Faith-Theme from A Summer Place"
  },
  {
    imageUrl: "/images/capri-9.jpg",
    timePeriod: "2000s",
    description: "Spanish tennis player Rafael Nadal wore capri pants in the majority of his matches before 2009.",
    numberOneSong: "The Black Eyed Peas-Boom Boom Pow"
  },
];

// Navbar Color Changes

const navbarColor = (elementId, color) => {
  document.getElementById(elementId).style.backgroundColor = color;
} 

// DOM

const printToDom = (selector, textToPrint) => {
  const selectedDiv = document.querySelector(selector);
  selectedDiv.innerHTML = textToPrint;
}

// Index Page

const buyCapriBttn = () => {
  for (let i = 0; i < capris.length; i++) {
  document.querySelector(`#${capris[i].name}`).addEventListener('click', generateProduct);
  }
}

const capriCarousel = () => {
  let domString = '';
  for (let i = 0; i < capris.length; i++) {
    if (i === 0) {
      domString += `
    <div class="carousel-item active">
      <img class="d-block w-100" src="${capris[i].imageUrl}" alt="Capri 1">
      <div class="d-flex justify-content-center">
        <a id="${capris[i].name}" class="btn btn-primary capri-btn" href="/capris.html?index=${i}" role="button">Buy ${capris[i].name}</a>
      </div>
      <p class="capri-description">${capris[i].description}</p>
    </div>
    `;
    } else if (i >= 1) {
      domString += `
      <div class="carousel-item">
        <img class="d-block w-100" src="${capris[i].imageUrl}" alt="Capri 1">
        <div class="d-flex justify-content-center">
          <a id="${capris[i].name}" class="btn btn-primary capri-btn" href="/capris.html?index=${i}" role="button">Buy ${capris[i].name}</a>
        </div>
        <p class="capri-description">${capris[i].description}</p>
      </div>
      `;
    } else;
  }
  printToDom("#carousel-items", domString);
  buyCapriBttn();
}

// Buy Capris page

const sizeDom = (pantsSize) => {
  domString = ''
  for (let i = 0; i < pantsSize.size.length; i++) {
    domString += `
      <option>${pantsSize.size[i]}</option>
  `
    printToDom('#size', domString);
  }
}

const starDom = (pantsRating) => {
  domString = ''
  for (let i = 0; i < pantsRating.starRating; i++) {
    domString += `
    ★
  `
  }
  for (let i = 5; i > pantsRating.starRating; i--) {
    domString += `
    ☆
  `
  }
  printToDom('#ratingDom', domString);
}

// This is the event listener for the add to cart page

const cartBttnClick = () => {
  document.querySelector('#cartbutton').addEventListener('click', addedToCart);
}

// Prints order confirmed string

const addedToCart = () => {
  $('.modal').modal(focus)
}

// Creates content for Buy Capris page based on click from home page

const generateProduct = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get('index');
  domString = '';
  for (let i = 0; i < capris.length; i++) {
    if (i == myParam) {
    domString += `
    <div id="caprisDom">
      <img id="buycaprispic" src="${capris[i].imageUrl}">
      <div id="nameandrating">
        <h5 id="buycaprisname">${capris[i].name}</h5><h2><div id="ratingDom"></div></h2>
      </div>
      <div class="caprisinfobox">
        <p id="caprisinfo">${capris[i].description}</p>
        <div class="sizeandprice">
          <div id="sizeselector">
            <label id="sizelabel">Size:</label>
            <select name="sizelist" id="size">
            </select>
          </div>
          <h3 id="price">$${capris[i].price}</h3>
        </div>
        <button id="cartbutton">Add to Cart</button>
      </div>
    </div>
    `;
    }
  }
  printToDom('#caprismain', domString);
  cartBttnClick();
  sizeDom(capris[myParam])
  starDom(capris[myParam])
}

// History page Olamide

const historyCarousel = () => {
  let domString = '';
  for (let i = 0; i < capriHistory.length; i++) {
    if (i === 0) {
      domString += `
    <div id="carousel-container" class="carousel-item history-border active">
      <img class="d-block w-100 history-image" src="${capriHistory[i].imageUrl}" alt="Capri 1">
      <h1> ${capriHistory[i].timePeriod}</h1>
      <p class="capri-description">${capriHistory[i].description}</p>
      <a class="Song">NUMBER #1 SONG:${capriHistory[i].numberOneSong}</a>
    </div>
    `;
    } else if (i >= 1) {
      domString += `
    <div class="carousel-item history-border">
      <img class="d-block w-100 history-image" src="${capriHistory[i].imageUrl}" alt="Capri 1">
      <h1> ${capriHistory[i].timePeriod}</h1>
      <p class="capri-description">${capriHistory[i].description}</p>
      <a class="Song">NUMBER #1 SONG:${capriHistory[i].numberOneSong}</a>
    </div>
    `;
    }
  }
  printToDom("#history-carousel", domString);
}

// Contact page

const contactSubmitted = () => {
  document.getElementById("contactform").reset();
  $('.modal').modal(focus)
}

const contactSubmitClick = () => {
  document.querySelector('#contactbutton').addEventListener('click', contactSubmitted);
}

// Check Path Name (Ryan)

const checkPathName = () => {
  if (location.pathname === '/index.html') {
    capriCarousel();
    navbarColor("home-color", "#c3a61e");
   } else if (location.pathname === '/capris.html') {
      generateProduct();
      navbarColor("home-color", "#c3a61e");
   } else if (location.pathname === '/contact.html') {
      contactSubmitClick();
      navbarColor("contact-color", "#a775d2");
  } else if (location.pathname === '/history.html') {
      historyCarousel();
      navbarColor("history-color", "#e5562b");
  } else;
}

const init = () => {
  checkPathName();
}

init();
