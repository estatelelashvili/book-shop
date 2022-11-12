fetch('../books.json')
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
  const bgImage = document.createElement('div');
  const capt = document.createElement('div');
  const sp1 = document.createElement('span');
  const sp2 = document.createElement('span');
  const hr = document.createElement('hr');
  const btnOurBooks = document.createElement('button');
  const br = document.createElement('br');

  btnOurBooks.className = 'btn';
  btnOurBooks.innerText = 'try our books';
  sp1.className = 'border';
  sp2.className = 'border';
  sp1.innerText = 'discover the  ';
  sp2.innerText = 'great minds';

  bgImage.className = 'bgimg-1';
  capt.className = 'caption';
  hr.className = 'hr2';

  btnOurBooks.onclick = function () {
    location.href = '#header';

    setTimeout(() => {
      bgImage.remove();
    }, 600);
  };

  capt.appendChild(sp1);
  capt.appendChild(br);
  capt.appendChild(sp2);
  capt.appendChild(hr);
  capt.appendChild(btnOurBooks);
  bgImage.appendChild(capt);
  let fragment = new DocumentFragment();

  fragment.appendChild(bgImage);

  const header = document.createElement('header');
  header.setAttribute('id', 'header');
  const heading = document.createElement('h1');
  const container = document.createElement('div');

  container.className = 'container';
  heading.setAttribute('id', 'heading');
  heading.innerHTML = 'Book Catalog';

  header.append(heading);
  fragment.append(header);

  let grandCartCont = document.createElement('div');
  grandCartCont.setAttribute('id', 'grand-id');
  grandCartCont.className = 'grand-cart-container';

  // alert('hi');

  // if (!checkVisible(bgImage)) grandCartCont.style.visibility = 'visible';
  let cartContainer = document.createElement('div');
  cartContainer.className = 'cart-container';

  //CART SHOW/HIDE TOGGLE
  let btnToggleCart = document.createElement('button');
  let btnToggleCartIMG = document.createElement('img');
  btnToggleCartIMG.className = 'btn-ToggleCart-img';
  btnToggleCartIMG.src = '../images/shopping_bag_icon_153998.ico';

  let btnOrder = document.createElement('button');
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

  btnOrder.style.cssText = `position:absolute;  width: 115px; left: 15%;
  bottom: 10px;`;

  let cart = document.createElement('div');
  let babyCart = document.createElement('div');

  //TOTAL PRICE TAG
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

  let clearAll = document.createElement('button');
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

  babyCart.setAttribute('id', agent_1);

  cart.style.cssText = `display: none;`;
  clearAll.style.cssText = `position:absolute;  width: 75px; left: 55%;
  bottom: 10px;`;
  cart.appendChild(clearAll);
  cart.appendChild(btnOrder);

  //TABLE

  let testTable = document.createElement('table');

  //TOGGLE CART BUTTON

  btnToggleCart.onclick = function () {
    if (cart.style.display === 'block') {
      cart.style.display = 'none';
    } else {
      cart.style.display = 'block';
    }
  };

  //REDIRECT TO ORDER PAGE

  btnOrder.onclick = function () {
    location.href = 'deliveryForm.html';
  };

  //CART APPEND ELEMENTS
  cart.appendChild(babyCart);
  cartContainer.appendChild(cart);

  grandCartCont.appendChild(cartContainer);

  grandCartCont.appendChild(btnToggleCart);

  header.append(grandCartCont);

  let detailedInformationContainer = document.createElement('div');
  detailedInformationContainer.className = 'detailed-information-container';
  let disableShowMore = true;

  // IMPLEMENT DRAG AND DROP
  cartContainer.addEventListener('dragover', allowDrop);
  grandCartCont.addEventListener('dragover', allowDrop);
  function allowDrop(ev) {
    ev.preventDefault();
  }

  cartContainer.addEventListener('drop', drop);
  grandCartCont.addEventListener('drop', drop);

  function drop(ev) {
    let title2 = document.createElement('div');
    let author2 = document.createElement('p');
    let bookName2 = document.createElement('p');
    let image2 = document.createElement('img');
    let price2 = document.createElement('p');
    let btnX2 = document.createElement('button');

    price2.className = 'elm-p';
    bookName2.className = 'elm-t';
    author2.className = 'elm-a';
    image2.className = 'elm-img';
    image2.src = data[+agent_1].imageLink;

    author2.innerHTML = data[+agent_1].author;
    price2.innerHTML = data[+agent_1].price + '$';
    bookName2.innerHTML = data[+agent_1].title;
    btnX2.innerText = 'X';

    if (cart.textContent.includes(price2.textContent)) {
    } else {
      let middleRow2 = document.createElement('tr');
      middleRow2.style.cssText = `display: flex; align-items: center;`;

      let titleTD2 = document.createElement('td');
      let imageTD2 = document.createElement('td');
      let priceTD2 = document.createElement('td');
      let btnXTD2 = document.createElement('td');

      imageTD2.appendChild(image2);
      btnXTD2.appendChild(btnX2);
      title2.appendChild(bookName2);
      title2.appendChild(author2);
      titleTD2.appendChild(title2);
      priceTD2.appendChild(price2);

      middleRow2.appendChild(imageTD2);
      middleRow2.appendChild(titleTD2);
      middleRow2.appendChild(priceTD2);
      middleRow2.appendChild(btnXTD2);

      testTable.appendChild(middleRow2);

      let empArr = [];
      const collection = document.getElementsByClassName('elm-p');
      itemCount = collection.length;
      itemCountText.textContent = `${itemCount}`;

      for (let i = 0; i < collection.length; i++) {
        empArr.push(collection[i].textContent.replace('$', ''));
      }

      let sumArr = empArr.map(Number);

      total.textContent = sumArr.reduce((p, c) => p + c);

      specialPriceTag = sumArr.reduce((p, c) => p + c);
      totalPrice.textContent = `Total: ${specialPriceTag}$`;

      btnX2.onclick = () => {
        val = parseInt(total.textContent) - parseInt(price2.textContent);
        total.textContent = val.toString();
        totalPrice.textContent = `Total: ${
          specialPriceTag - parseInt(price2.textContent)
        }`;
        totalPrice.textContent = `Total: ${val.toString()}$`;

        middleRow2.remove();
        const collection = document.getElementsByClassName('elm-p');
        itemCount = collection.length;
        itemCountText.textContent = `${itemCount}`;
      };
    }

    ev.preventDefault();
  }

  //CATALOG LOOP STARTS HERE

  for (var i = 0; i < data.length; i++) {
    const wrapper = document.createElement('div');
    const info = document.createElement('div');
    const btnContainer = document.createElement('div');
    btnContainer.className = 'btn-container';
    const card = document.createElement('div');

    // const overlay = document.createElement('div');
    // const text = document.createElement('div');
    const image = document.createElement('img');
    image.setAttribute('id', 'thumbnail-image-id');
    image.className = 'thumbnail-image';
    const title = document.createElement('h4');
    const author = document.createElement('h5');
    const price = document.createElement('span');

    // const slideUpPrice = document.createElement('p');
    // const slideUpTitle = document.createElement('p');
    // const slideUpAuthor = document.createElement('p');
    const btnAddToCart = document.createElement('button');
    const imgAddToCart = document.createElement('img');
    btnAddToCart.className = 'btn-add-2-basket';
    imgAddToCart.className = 'tiny-img';
    imgAddToCart.src = '../images/shopping_bag_icon_153998.ico';
    btnAddToCart.appendChild(imgAddToCart);
    let add2Cartext = document.createTextNode('Add to Bag');
    add2Cartext.className = 'btn-add-2-basket-text-node';
    btnAddToCart.appendChild(add2Cartext);
    let imagSrc = data[i].imageLink;

    // slideUpPrice.className = 'slide-up-price';
    // slideUpTitle.className = 'slide-up-title';
    // slideUpAuthor.className = 'slide-up-author';

    // slideUpPrice.innerHTML = data[i].price + '$';
    // slideUpTitle.innerHTML = data[i].title;
    // slideUpAuthor.innerHTML = data[i].author;

    image.setAttribute('id', `${i}`);

    let detailedInformation = document.createElement('div');
    let btnInfoX = document.createElement('button');
    detailedInformation.className = 'detailed-information';
    btnInfoX.className = 'btn-info-x';
    btnInfoX.textContent = 'close';

    btnInfoX.addEventListener('click', hideDetails);
    function hideDetails() {
      disableShowMore = true;
      detailedInformation.style.display = 'none';
    }
    const descriptionPopUp = document.createElement('p');
    const disPhoto = document.createElement('img');
    disPhoto.src = data[i].imageLink;
    descriptionPopUp.innerText = data[i].description;
    detailedInformation.appendChild(btnInfoX);
    detailedInformation.appendChild(descriptionPopUp);
    detailedInformationContainer.appendChild(detailedInformation);
    fragment.appendChild(detailedInformationContainer);

    const btnShowMore = document.createElement('button');
    btnShowMore.className = 'btn-add-2-basket';
    let ShowMoretext = document.createTextNode('Show more');
    ShowMoretext.className = ' ShowMoretext-text-node';
    const imgMore = document.createElement('img');
    imgMore.className = 'tiny-img2';
    imgMore.src = '../images/NicePng_eye-black-png_3831917.png';
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

    btnAddToCart.addEventListener('click', addBookToBasket);
    function addBookToBasket() {
      let elmInfo = document.createElement('div');
      let elmP = document.createElement('div');
      let elmT = document.createElement('div');
      let elmA = document.createElement('div');
      let elmImage = document.createElement('img');
      elmInfo.className = 'elm-info';
      elmP.className = 'elm-p';
      elmT.className = 'elm-t';
      elmA.className = 'elm-a';
      elmImage.className = 'elm-img';
      let btnX = document.createElement('button');

      btnX.className = 'btn-x';
      btnX.innerHTML = 'X';
      elmP.innerHTML = price.textContent;
      elmT.innerHTML = title.textContent;
      elmA.innerHTML = author.textContent;
      // elmP.innerHTML = slideUpPrice.textContent;
      // elmT.innerHTML = slideUpTitle.textContent;
      // elmA.innerHTML = slideUpAuthor.textContent;
      elmImage.src = imagSrc;
      elmImage.style.cssText = `background-color: red;`;
      if (cart.textContent.includes(price.textContent)) {
      } else {
        let middleRow = document.createElement('tr');
        middleRow.style.cssText = `display: flex; align-items: center;`;

        let titleTD = document.createElement('td');
        let btnXTD = document.createElement('td');
        let imageTD = document.createElement('td');
        let priceTD = document.createElement('td');

        imageTD.style.cssText = `align-self: stretch;`;
        imageTD.appendChild(elmImage);
        priceTD.appendChild(elmP);
        btnXTD.appendChild(btnX);
        titleTD.appendChild(elmT);
        titleTD.appendChild(elmA);
        middleRow.appendChild(imageTD);
        middleRow.appendChild(titleTD);
        middleRow.appendChild(priceTD);
        middleRow.appendChild(btnXTD);

        testTable.appendChild(middleRow);

        let empArr = [];
        const collection = document.getElementsByClassName('elm-p');
        itemCount = collection.length;
        itemCountText.textContent = `${itemCount}`;

        for (let i = 0; i < collection.length; i++) {
          empArr.push(collection[i].textContent.replace('$', ''));
        }

        let sumArr = empArr.map(Number);

        total.textContent = sumArr.reduce((p, c) => p + c);

        specialPriceTag = sumArr.reduce((p, c) => p + c);
        totalPrice.textContent = `Total: ${specialPriceTag}$`;

        btnX.onclick = function () {
          val = parseInt(total.textContent) - parseInt(elmP.textContent);
          total.textContent = val.toString();
          totalPrice.textContent = `Total: ${
            specialPriceTag - parseInt(elmP.textContent)
          }`;
          totalPrice.textContent = `Total: ${val.toString()}$`;

          middleRow.remove();
          const collection = document.getElementsByClassName('elm-p');
          itemCount = collection.length;
          itemCountText.textContent = `${itemCount}`;
        };
      }
    }

    wrapper.className = 'wrapper';
    info.className = 'info';
    card.className = 'card';

    // overlay.className = 'overlay';
    // text.className = 'text';
    title.className = 'title';
    author.className = 'author';
    price.className = 'price';
    title.innerHTML = data[i].title;
    author.innerHTML = data[i].author;
    price.innerHTML = data[i].price + '$';
    image.src = data[i].imageLink;

    card.appendChild(image);
    info.appendChild(title);
    info.appendChild(author);
    info.appendChild(price);
    btnContainer.appendChild(btnAddToCart);
    btnContainer.appendChild(btnShowMore);
    info.appendChild(btnContainer);
    // text.appendChild(slideUpPrice);
    // text.appendChild(slideUpTitle);
    // text.appendChild(slideUpAuthor);
    // text.appendChild(btnAddToCart);
    // text.appendChild(btnShowMore);

    // overlay.appendChild(text);

    // card.appendChild(overlay);
    card.appendChild(info);

    wrapper.appendChild(card);
    container.appendChild(wrapper);
  }
  document.body.addEventListener('dragstart', drag);
  document.body.addEventListener('dragend', dragEnded);
  let dragHereMSG = document.createElement('p');
  dragHereMSG.className = 'drag-here-msg';
  grandCartCont.appendChild(dragHereMSG);

  dragHereMSG.visibility = 'hidden';

  function dragEnded(ev) {
    // grandCartCont.style.cssText = 'border: none';
    grandCartCont.className = 'grand-cart-container';
    // container.style.cssText = 'margin-top: 20px';
    container.className = 'container';
    btnToggleCart.style.visibility = 'visible';
    dragHereMSG.innerText = '';
    dragHereMSG.visibility = 'hidden';
    ev.dataTransfer.setData('text', ev.target.id);
  }
  function drag(ev) {
    grandCartCont.className = 'grand-cart-container-alter';
    // grandCartCont.style.cssText =
    //   'border: silver dashed 2px; height: 250px; width: 250px; background-color: aliceblue; position: fixed;';
    btnToggleCart.style.visibility = 'hidden';
    container.className = 'container-alt';
    // container.style.cssText = 'margin-top: 93px';
    dragHereMSG.innerText = 'drop here...';
    dragHereMSG.visibility = 'visible';
    agent_1 = ev.target.id;
    ev.dataTransfer.setData('text', ev.target.id);
  }

  const footer = document.createElement('footer');
  const authorContainer = document.createElement('div');
  const footerInfo = document.createElement('div');
  authorContainer.className = 'author-info';
  footerInfo.className = 'footer-info';
  const bookShopAuthorP = document.createElement('span');
  const copyR = document.createElement('span');
  const date = document.createElement('span');
  bookShopAuthorP.innerText = 'Estate Lelashvili';
  copyR.innerHTML = '&copy';
  authorContainer.appendChild(bookShopAuthorP);
  authorContainer.appendChild(copyR);
  date.innerText = '11.11.2022';
  footerInfo.appendChild(authorContainer);
  footerInfo.appendChild(date);
  footer.appendChild(footerInfo);

  fragment.append(container);
  fragment.append(footer);
  document.body.appendChild(fragment);
}

function isScrolledIntoView(el) {
  var rect = el.getBoundingClientRect();
  var elemTop = rect.top;
  var elemBottom = rect.bottom;

  // Only completely visible elements return true:
  var isVisible = elemTop >= 0 && elemBottom <= window.innerHeight;
  // Partially visible elements return true:
  //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
  return isVisible;
}
