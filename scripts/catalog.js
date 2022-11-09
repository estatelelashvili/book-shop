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

  const hello = document.createElement('h1');

  hello.innerHTML = 'Hello Books!';

  fragment.appendChild(hello);

  document.body.appendChild(fragment);
}
