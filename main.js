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

/* Creates content for Buy Capris page based on click from home page */

// const generateProduct = (selectedPants) => {
//   domString = '';
//   domString += `
//   <div id="caprisDom">
//   <img id="buycaprispic" src="${selectedPants.imageUrl}">
//   <div id="nameandrating">
//     <h5 id="buycaprisname">${selectedPants.name}</h5><h2>☆☆☆☆☆</h2>
//   </div>
//   <div class="caprisinfobox">
//     <p id="caprisinfo">${selectedPants.description}</p>
//     <div class="sizeandprice">
//       <div id="sizeselector">
//        <label id="sizelabel">Size:</label>
//         <select name="sizelist" id="size">
//           <option>XS - 28 x 27</option>
//           <option>S - 30 x 29</option>
//           <option>M - 32 x 31</option>
//           <option>L - 34 x 33</option>
//          <option>XL - 36 x 35</option>
//         </select>
//       </div>
//       <h3 id="price">$${selectedPants.price}</h3>
//     </div>
//     <button id="cartbutton">Add to Cart</button>
//   </div>
// </div>

// <footer id="sticky-footer" class="py-4 bg-dark text-white-50 footer">
// <ul class="social">
//   <li><i class="fab fa-facebook"></i></li>
//   <li><i class="fab fa-twitter"></i></li>
//   <li><i class="fab fa-instagram"></i></li>
//   <li><i class="fab fa-github"></i></li>
// </ul>
// <div class="copywrite"><small>Copyright &copy; CapriAndSons.com <br><a href="contact.html">Contact Us</a></small></div>
// </footer>
//   `; 
//   printToDom('#caprismain', domString);
// };

// /* Doesn't work yet for some reason, plan is to clear the screen and display a thank you h1 */

// const cartBttnClick = () => {
//   document.getElementById('cartbutton');  
//   cartbutton.addEventListener('click', addedToCart);
// }

// const addedToCart = () => {
//   domString = '';
//   domString += `
//   <h1>Thank you for your purchase!</h1>
//   `;
//   printToDom('#caprismain', domString);
// }

// generateProduct(capris[0]);

// Index Page (Ryan's wip)

const carouselItems = () => {
  let domString;
  for (let i = 0; i < capris.length; i++) {
    domString += `
    <div class="carousel-item">
      <img class="d-block w-100" src="${capris[i].imageUrl}" alt="Capri 1">
      <div class="d-flex justify-content-center">
        <a id="capri-btn" class="btn btn-primary" href="#" role="button">Buy ${capris[i].name}</a>
      </div>
      <p class="capri-description">${capris[i].description}</p>
    </div>
    `;
  }
  printToDom("#capri-1", domString);
}

const init = () => {
  carouselItems();
}

init();
