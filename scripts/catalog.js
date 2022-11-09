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

  // data.forEach((element) => {
  //   const bookPad = document.createElement('div');
  //   bookPad.className = 'book-pad';
  //   const bookInfo = document.createElement('div');
  //   bookInfo.className = 'book-info';
  //   const bookImage = document.createElement('img');
  //   const addedPath = '../assets/';
  //   bookImage.src = addedPath + element.imageLink;
  //   const title = document.createElement('p');
  //   title.innerText = element.title;
  //   const author = document.createElement('p');
  //   author.innerText = element.author;
  //   const price = document.createElement('p');
  //   price.innerText = element.price;
  //   bookPad.append(bookImage);
  //   bookInfo.append(title);
  //   bookInfo.append(author);
  //   bookInfo.append(price);
  //   bookPad.append(bookInfo);
  //   bookContainer.append(bookPad);
  // });

  fragment.append(container);
  document.body.append(fragment);
}
