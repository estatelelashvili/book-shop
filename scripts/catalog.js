fetch('../assets/books.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    console.log('error: ' + err);
  });

function appendData(data) {
  let fragment = new DocumentFragment();
  const header = document.createElement('header');
  const heading = document.createElement('h1');
  const container = document.createElement('div');

  heading.innerHTML = 'Book Catalog';
  container.className = 'container';

  header.append(heading);
  fragment.append(header);

  let grandCartCont = document.createElement('div');
  let cartContainer = document.createElement('div');

  grandCartCont.className = 'grand-cart-container';
  cartContainer.className = 'cart-container';

  //Cart show/hide toggle button
  let btnToggleCart = document.createElement('button');
  let btnToggleCartIMG = document.createElement('img');
  btnToggleCartIMG.className = 'btn-ToggleCart-img';
  btnToggleCartIMG.src = '../assets/icons/shopping_bag_icon_153998.ico';

  let btnOrder = document.createElement('button');
  btnOrder.className = 'btn-order';
  let itemCount = 0;
  let btnToggleCartText = document.createTextNode('My Bag');
  let itemCountText = document.createElement('p');
  itemCountText.textContent = `${itemCount}`;
  itemCountText.className = 'item-count-text';

  btnToggleCart.appendChild(btnToggleCartText);
  btnToggleCart.appendChild(btnToggleCartIMG);
  btnToggleCart.appendChild(itemCountText);
  btnOrder.textContent = 'Confirm order';
  btnToggleCart.className = 'btn-ToggleCart';

  let cart = document.createElement('div');
  let babyCart = document.createElement('div');

  let totalPrice = document.createElement('p');
  let hrCart = document.createElement('hr');
  let unorderedList = document.createElement('ul');
  let listItem1 = document.createElement('li');
  let listItem2 = document.createElement('li');
  let listItem3 = document.createElement('li');
  listItem1.textContent = 'Image';
  listItem2.textContent = 'Name';
  listItem3.textContent = 'Price';
  unorderedList.appendChild(listItem1);
  unorderedList.appendChild(listItem2);
  unorderedList.appendChild(listItem3);

  const clearAll = document.createElement('button');
  clearAll.className = 'clear-all';
  clearAll.innerText = 'Clear All';
  clearAll.onclick = () => {
    testTable.innerHTML = '';
    itemCount = 0;
    specialPriceTag = 0;
    totalPrice.textContent = `Total: ${specialPriceTag}$`;
    itemCountText.textContent = `${itemCount}`;
  };

  let specialPriceTag = 0;
  let val = 0;
  totalPrice.innerText = `Total: ${specialPriceTag}$`;
  let total = document.createElement('p');
  cart.appendChild(totalPrice);
  cart.appendChild(hrCart);
  cart.appendChild(unorderedList);

  cart.className = 'cart-content';
  babyCart.className = 'baby-cart-content';
  let agent_1;

  cart.appendChild(clearAll);
  cart.appendChild(btnOrder);

  //Table

  let testTable = document.createElement('table');

  //TOGGLE CART BUTTON

  btnToggleCart.onclick = function () {
    if (cart.style.display === 'block') {
      cart.style.display = 'none';
    } else {
      cart.style.display = 'block';
    }
  };

  //Cart append elements
  cart.appendChild(babyCart);
  cartContainer.appendChild(cart);

  grandCartCont.appendChild(cartContainer);

  grandCartCont.appendChild(btnToggleCart);

  header.append(grandCartCont);

  let detailedInformationContainer = document.createElement('div');
  detailedInformationContainer.className = 'detailed-information-container';
  let disableShowMore = true;

  data.forEach((element, i) => {
    const addedPath = '../assets/';
    const bookImage = document.createElement('img');
    bookImage.src = addedPath + element.imageLink;

    const wrapper = document.createElement('div');
    const info = document.createElement('div');

    const card = document.createElement('div');

    const overlay = document.createElement('div');
    const text = document.createElement('div');
    // const image = document.createElement('img');
    bookImage.className = 'thumbnail-image';
    const title = document.createElement('h4');
    const author = document.createElement('h5');
    const price = document.createElement('span');

    const slideUpPrice = document.createElement('p');
    const slideUpTitle = document.createElement('p');
    const slideUpAuthor = document.createElement('p');
    const btnAddToCart = document.createElement('button');
    const imgAddToCart = document.createElement('img');
    btnAddToCart.className = 'btn-add-2-basket';
    imgAddToCart.className = 'tiny-img';
    imgAddToCart.src = '../assets/icons/shopping_bag_icon_153998.ico';
    btnAddToCart.appendChild(imgAddToCart);
    let add2Cartext = document.createTextNode('Add to Bag');
    add2Cartext.className = 'btn-add-2-basket-text-node';
    btnAddToCart.appendChild(add2Cartext);
    // let imagSrc = element.imageLink;
    slideUpPrice.className = 'slide-up-price';
    slideUpTitle.className = 'slide-up-title';
    slideUpAuthor.className = 'slide-up-author';

    slideUpPrice.innerHTML = element.price + '$';
    slideUpTitle.innerHTML = element.title;
    slideUpAuthor.innerHTML = element.author;

    bookImage.setAttribute('id', `${i}`);

    let detailedInformation = document.createElement('div');
    let btnInfoX = document.createElement('button');
    detailedInformation.className = 'detailed-information';
    btnInfoX.className = 'btn-info-x';
    btnInfoX.textContent = 'X';

    btnInfoX.addEventListener('click', hideDetails);
    function hideDetails() {
      disableShowMore = true;
      detailedInformation.style.display = 'none';
    }
    const descriptionPopUp = document.createElement('p');
    const disPhoto = document.createElement('img');
    disPhoto.src = addedPath + element.imageLink;
    descriptionPopUp.innerText = element.description;
    detailedInformation.appendChild(btnInfoX);
    detailedInformation.appendChild(descriptionPopUp);
    detailedInformationContainer.appendChild(detailedInformation);
    fragment.appendChild(detailedInformationContainer);
    const btnShowMore = document.createElement('button');
    btnShowMore.className = 'btn-add-2-basket';
    let ShowMoretext = document.createTextNode('Show more');
    ShowMoretext.className = 'ShowMoretext-text-node';
    const imgMore = document.createElement('img');
    imgMore.className = 'tiny-img2';
    imgMore.src = '../assets/icons/NicePng_eye-black-png_3831917.png';
    btnShowMore.appendChild(imgMore);
    btnShowMore.appendChild(ShowMoretext);
    btnShowMore.addEventListener('click', showDetails);
    function showDetails() {
      if (disableShowMore) {
        disableShowMore = false;
        detailedInformation.style.display = 'block';
      }
    }
    babyCart.append(testTable);
    // btnAddToCart.addEventListener('click', addBookToBasket);
  });

  fragment.append(container);
  document.body.append(fragment);
}
