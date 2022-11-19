// DELIVERY FORM
let btnSubmit = document.getElementById('btn-submit');
let nameField = document.getElementById('field_name');
let SurNameField = document.getElementById('field_surname');
let dateField = document.getElementById('field_date');
let StreetField = document.getElementById('field_street');
let HouseField = document.getElementById('field_house');
let FlatField = document.getElementById('field_flat');
let PaymentField = document.getElementById('field_payment');
let cashField = document.getElementById('cash-radio');
let cardField = document.getElementById('card-radio');
let GiftsField = document.getElementById('field_gifts');
let gift1 = document.getElementById('check-pack');
let gift2 = document.getElementById('check-postcard');
let gift3 = document.getElementById('check-discount-radio');
let gift4 = document.getElementById('check-pen');

let homeBtn = document.getElementById('go-home');

let validName = false;
let validSurName = false;
let validDate = false;
let validStreet = false;
let validHouse = false;
let validFlate = false;
let validPayment = false;

let fieldArr = [
  nameField.value,
  SurNameField.value,
  dateField.value,
  HouseField.value,
  StreetField.value,
  FlatField.value,
  cardField.value,
  cashField.value,
];

function resetForm() {
  nameField.value = '';
  SurNameField.value = '';
  dateField.value = '';
  HouseField.value = '';
  StreetField.value = '';
  FlatField.value = '';
  cardField.checked = false;
  cashField.checked = false;
  gift1.checked = false;
  gift2.checked = false;
  gift3.checked = false;
  gift4.checked = false;
}

window.onload = function () {
  resetForm();
  checkBTN();
  nameField.focus();
};
let warnPopName = document.getElementById('warn-pop-up-name');
nameField.addEventListener('input', function () {
  let val = document.getElementById('field_name').value;
  let el = document.getElementById('field_name');
  if (/^[A-Za-z]{4,}$/.test(val)) {
    el.className = 'valid';
    warnPopName.style.visibility = 'hidden';
    validName = true;
  } else {
    el.className = 'invalid';
    warnPopName.style.visibility = 'visible';
    validName = false;
  }
  checkBTN();
});
nameField.addEventListener('blur', checkBTN);
nameField.addEventListener('focusout', function () {
  let val = document.getElementById('field_name').value;
  let el = document.getElementById('field_name');
  if (val.length < 4) {
    el.className = 'invalid';
    warnPopName.style.visibility = 'visible';
    validName = false;
  } else {
    el.className = 'valid';
    warnPopName.style.visibility = 'hidden';
    validName = true;
  }
});

let warnPopSurName = document.getElementById('warn-pop-up-surname');

SurNameField.addEventListener('input', function () {
  let val = document.getElementById('field_surname').value;
  let el = document.getElementById('field_surname');
  if (/^[A-Za-z]{5,}$/.test(val)) {
    el.className = 'valid';
    warnPopSurName.style.visibility = 'hidden';
    validSurName = true;
  } else {
    el.className = 'invalid';
    warnPopSurName.style.visibility = 'visible';
    validSurName = false;
  }
  checkBTN();
});

SurNameField.addEventListener('focusout', function () {
  let val = document.getElementById('field_surname').value;
  let el = document.getElementById('field_surname');
  if (val.length < 5) {
    el.className = 'invalid';
    warnPopSurName.style.visibility = 'visible';
    validSurName = false;
  } else {
    el.className = 'valid';
    warnPopSurName.style.visibility = 'hidden';
    validSurName = true;
  }
  checkBTN();
});

let warnPopDate = document.getElementById('warn-pop-up-date');

dateField.addEventListener('focusout', function () {
  let el = document.getElementById('field_date');
  let today = new Date();
  let datePicked = document.getElementById('field_date').value;

  let userDate = new Date(datePicked);
  if (datePicked && userDate > today) {
    el.className = 'valid';
    warnPopDate.style.visibility = 'hidden';
    validDate = true;
  } else {
    el.className = 'invalid';
    warnPopDate.style.visibility = 'visible';
    validDate = false;
  }
  checkBTN();
});
dateField.addEventListener('change', function () {
  let el = document.getElementById('field_date');
  let today = new Date();
  let datePicked = document.getElementById('field_date').value;

  let userDate = new Date(datePicked);
  if (datePicked && userDate > today) {
    el.className = 'valid';
    warnPopDate.style.visibility = 'hidden';
    validDate = true;
  } else {
    el.className = 'invalid';
    warnPopDate.style.visibility = 'visible';
    validDate = false;
  }
  checkBTN();
});

let warnPopStreet = document.getElementById('warn-pop-up-street');

StreetField.addEventListener('input', function () {
  let val = document.getElementById('field_street').value;
  let el = document.getElementById('field_street');

  let words = val.split(' ');
  words = words.filter((entry) => entry.trim() != '');

  const wordCount = words.length;
  const whiteSpaceCount = val.split('').filter((x) => x === ' ').length;

  if (/^[0-9a-zA-Z\s]{5,}$/.test(val) && whiteSpaceCount < wordCount) {
    el.className = 'valid';
    warnPopStreet.style.visibility = 'hidden';
    validStreet = true;
  } else {
    el.className = 'invalid';
    warnPopStreet.style.visibility = 'visible';
    validStreet = false;
  }
  checkBTN();
});
StreetField.addEventListener('focusout', function () {
  let val = document.getElementById('field_street').value;
  let el = document.getElementById('field_street');

  let words = val.split(' ');
  words = words.filter((entry) => entry.trim() != '');
  const wordCount = words.length;
  const whiteSpaceCount = val.split('').filter((x) => x === ' ').length;

  if (/^[0-9a-zA-Z\s]{5,}$/.test(val) && whiteSpaceCount < wordCount) {
    el.className = 'valid';
    warnPopStreet.style.visibility = 'hidden';
    validStreet = true;
  } else {
    el.className = 'invalid';
    warnPopStreet.style.visibility = 'visible';
    validStreet = false;
  }
  checkBTN();
});

let warnPopHouse = document.getElementById('warn-pop-up-house');

HouseField.addEventListener('input', function () {
  let val = document.getElementById('field_house').value;
  let el = document.getElementById('field_house');
  if (/^[1-9]+[0-9]*$/.test(val)) {
    el.className = 'valid';
    warnPopHouse.style.visibility = 'hidden';
    validHouse = true;
  } else {
    el.className = 'invalid';
    warnPopHouse.style.visibility = 'visible';
    validHouse = false;
  }
  checkBTN();
});

HouseField.addEventListener('focusout', function () {
  let val = document.getElementById('field_house').value;
  let el = document.getElementById('field_house');
  if (val.length === 0 || !/^[1-9]+[0-9]*$/.test(val)) {
    el.className = 'invalid';
    warnPopHouse.style.visibility = 'visible';
    validHouse = false;
  } else {
    el.className = 'valid';
    warnPopHouse.style.visibility = 'hidden';
    validHouse = true;
  }
  checkBTN();
});

let warnPopFlat = document.getElementById('warn-pop-up-flat');

FlatField.addEventListener('input', function () {
  let val = document.getElementById('field_flat').value;
  let el = document.getElementById('field_flat');
  if (/(?!.*-$)^[1-9]+[-0-9]*$/.test(val)) {
    el.className = 'valid';
    warnPopFlat.style.visibility = 'hidden';
    validFlate = true;
  } else {
    el.className = 'invalid';
    warnPopFlat.style.visibility = 'visible';
    validFlate = false;
  }
  checkBTN();
});

FlatField.addEventListener('focusout', function () {
  PaymentField.focus();
  let val = document.getElementById('field_flat').value;
  let el = document.getElementById('field_flat');
  if (val.length === 0 || !/(?!.*-$)^[1-9]+[-0-9]*$/.test(val)) {
    el.className = 'invalid';
    warnPopFlat.style.visibility = 'visible';
    validFlate = false;
  } else {
    el.className = 'valid';
    warnPopFlat.style.visibility = 'hidden';
    validFlate = true;
  }
  checkBTN();
});

let cashSelected = false;
let cardSelected = false;

let warnPopPayment = document.getElementById('warn-pop-up-payment');

cashField.addEventListener('change', function () {
  if (cashField.checked) {
    cashSelected = true;
    cardField.checked = false;
    warnPopPayment.style.visibility = 'hidden';
    validPayment = true;
  }
  checkBTN();
});

cardField.addEventListener('change', function () {
  if (cardField.checked) {
    cardSelected = true;
    cashField.checked = false;
    warnPopPayment.style.visibility = 'hidden';
    validPayment = true;
  }
  checkBTN();
});

PaymentField.addEventListener('focusout', checkBTN);

PaymentField.addEventListener('focusout', function () {
  GiftsField.focus();
  if (cashField.checked === false && cardField.checked === false) {
    warnPopPayment.style.visibility = 'visible';
  }
});

var checks = document.querySelectorAll('.check');
var max = 2;
for (var i = 0; i < checks.length; i++) checks[i].onclick = selectiveCheck;
function selectiveCheck(event) {
  var checkedChecks = document.querySelectorAll('.check:checked');
  if (checkedChecks.length >= max + 1) {
    return false;
  }
}

function checkBTN() {
  if (
    validName &&
    validDate &&
    validSurName &&
    validStreet &&
    validHouse &&
    validFlate &&
    validPayment
  ) {
    btnSubmit.disabled = false;
    btnSubmit.style.cursor = 'pointer';
  } else {
    btnSubmit.disabled = true;
    btnSubmit.style.cursor = 'not-allowed;';
  }
}

const goHome = () => {
  resetForm();
  location.href = '../pages/catalogPage.html';
};

homeBtn.addEventListener('click', goHome);

let closePopUpBtn = document.getElementById('close-btn');
let addressInfo = document.getElementById('address-summary');
let customerInfo = document.getElementById('customer-summary');
let PopUp = document.getElementById('popM');

btnSubmit.addEventListener('click', (ev) => {
  addressInfo.innerText = `The delivery address is: ${StreetField.value} street, house #${HouseField.value}, flat #${FlatField.value}.`;
  customerInfo.innerText = `Customer: ${nameField.value} ${SurNameField.value}.`;
  PopUp.style.display = 'block';
  document.body.classList.add('no-scroll');
  ev.preventDefault();
});

closePopUpBtn.addEventListener('click', () => {
  document.body.classList.remove('no-scroll');
  const form = document.getElementById('myForm');
  form.submit();
  PopUp.style.display = 'none';
  nameField.focus();
});

function handleEnter(event) {
  if (event.key === 'Enter') {
    const form = document.getElementById('myForm');
    const index = [...form].indexOf(event.target);
    form.elements[index + 1].focus();
    event.preventDefault();
  }
}
