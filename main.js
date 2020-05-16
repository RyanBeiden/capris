// Main Capri Array to use for index.html & capris.html
// Star Ratings use integers 1 - 5

const capris = [
  {
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

const capriHistory =[

  { imageUrl: "/images/capri-7.jpg",
    timePeriod: "1950s",
    description: "Capris were created by Sonja de Lennart in the early 1950s. It was apart of the 'Capri Collection'. Named after the isle of capri where her family would holiday",
    numberOneSong: "Gordon Jenkins & The Weavers-Goodnight Irene"
  },
  { imageUrl:"/images/capri-8.jpg",
    timePeriod: "1960s",
    description: "Mary Tyler popularized Capri pants in the 60's on The Dick Van Dyke show",
    numberOneSong: "Percy Faith-Theme from A Summer Place"
  },
  { imageUrl:"/images/capri-9.jpg",
    timePeriod: "2000s",
    description: "Spanish tennis player Rafael Nadal wore capri pants in the majority of his matches before 2009.",
    numberOneSong: "The Black Eyed Peas-Boom Boom Pow"
  },
];

// DOM

const printToDom = (selector, textToPrint) => {
  const selectedDiv = document.querySelector(selector);
  selectedDiv.innerHTML = textToPrint;
}

// Redirects URLs

const pathRedirect = (urlPath) => {
  window.location.href = urlPath;
}

// Buy Capris page
// Creates content for Buy Capris page based on click from home page

const generateProduct = (selectedPants) => {
  // pathRedirect("/capris.html");
  domString = '';
  domString += `
  <div id="caprisDom">
    <img id="buycaprispic" src="${selectedPants[0].imageUrl}">
    <div id="nameandrating">
      <h5 id="buycaprisname">${selectedPants[0].name}</h5><h2>☆☆☆☆☆</h2>
    </div>
    <div class="caprisinfobox">
      <p id="caprisinfo">${selectedPants[0].description}</p>
      <div class="sizeandprice">
        <div id="sizeselector">
          <label id="sizelabel">Size:</label>
          <select name="sizelist" id="size">
            <option>XS - 28 x 27</option>
            <option>S - 30 x 29</option>
            <option>M - 32 x 31</option>
            <option>L - 34 x 33</option>
            <option>XL - 36 x 35</option>
          </select>
        </div>
        <h3 id="price">$${selectedPants[0].price}</h3>
      </div>
      <button id="cartbutton">Add to Cart</button>
    </div>
  </div>
  `;
  printToDom('#caprismain', domString);
  cartBttnClick();
};

// This is the event listener for the add to cart page

const cartBttnClick = () => {
  document.querySelector('#cartbutton').addEventListener('click', addedToCart);
}

// Prints order confirmed string

const addedToCart = () => {
  domString = '';
  domString += `
  <div id="purchasedbox">
    <h1 id='purchaseconfirm'>Item added to cart!</h1>
    <a href="index.html">Return to home page</a>
  </div>
  `;
  printToDom('#caprismain', domString);
}

// Index Page (Ryan)

const buyCapriBttn = () => {
  document.querySelector('#capri-btn').addEventListener('click', generateProduct);
}

const capriCarousel = () => {
  let domString = '';
  for (let i = 0; i < capris.length; i++) {
    if (i === 0) {
      domString += `
    <div class="carousel-item active">
      <img class="d-block w-100" src="${capris[i].imageUrl}" alt="Capri 1">
      <div class="d-flex justify-content-center">
        <a id="capri-btn" class="btn btn-primary" href="#" role="button">Buy ${capris[i].name}</a>
      </div>
      <p class="capri-description">${capris[i].description}</p>
    </div>
    `;
    } else if (i >= 1) {
      domString += `
      <div class="carousel-item">
        <img class="d-block w-100" src="${capris[i].imageUrl}" alt="Capri 1">
        <div class="d-flex justify-content-center">
          <a id="capri-btn" class="btn btn-primary" href="/capris.html" role="button">Buy ${capris[i].name}</a>
        </div>
        <p class="capri-description">${capris[i].description}</p>
      </div>
      `;
    }
  }
  printToDom("#carousel-items", domString);
  buyCapriBttn();
}

// Contact page

const contactSubmitted =() => {
  domString = '';
  domString += `
  <div id="emailsent">
    <h1 id='emailsentconfirm'>Your message has been sent!</h1>
    <a href="index.html">Return to home page</a>
  </div>
  `;
  printToDom('#contactconfirm', domString);
  document.getElementById("contactform").reset();
  document.getElementById("contactcontainer").hidden=true;
}

const contactSubmitClick = () => {
  document.querySelector('#contactbutton').addEventListener('click', contactSubmitted);
}

// Check Path Name (Ryan)

const checkPathName = () => {
  if (location.pathname === '/index.html') {
    capriCarousel();
  } else if (location.pathname === '/capris.html') {
    generateProduct(capris[0]);
  } else if (location.pathname === '/contact.html') {
    contactSubmitClick();
  } else;
}

const init = () => {
  checkPathName();
}

init();
