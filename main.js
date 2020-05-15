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

const printToDom = (selector, textToPrint) => {
  const selectedDiv = document.querySelector(selector);
  selectedDiv.innerHTML = textToPrint;
}

/* Buy Capris page */

/* Creates content for Buy Capris page based on click from home page */
const generateProduct = (selectedPants) => {
  domString = '';
  domString += `
  <div id="caprisDom">
  <img id="buycaprispic" src="${selectedPants.imageUrl}">
  <div id="nameandrating">
    <h5 id="buycaprisname">${selectedPants.name}</h5><h2>☆☆☆☆☆</h2>
  </div>
  <div class="caprisinfobox">
    <p id="caprisinfo">${selectedPants.description}</p>
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
      <h3 id="price">$${selectedPants.price}</h3>
    </div>
    <button id="cartbutton">Add to Cart</button>
  </div>
</div>
  `; 
  printToDom('#caprismain', domString);
  cartBttnClick()
};

/* This is the event listener for the add to cart page */
const cartBttnClick = () => {
  document.querySelector('#cartbutton').addEventListener('click', addedToCart);
}

/* Prints order confirmed string */
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

/* Contact page */

/* const contactSubmitClick = () => {
  document.getElementById('contactbutton');  
  cartbutton.addEventListener('click', contactSubmitted);
} */

/* contactSubmitted {
} */

/* cartBttnClick() */
generateProduct(capris[0])