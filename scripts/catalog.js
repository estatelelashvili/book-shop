// fetch('./books.json')
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     appendData(data);
//   })
//   .catch(function (err) {
//     console.log('error: ' + err);
//   });

function appendData() {
  let fragment = new DocumentFragment();

  const hello = document.createElement('h1');

  hello.innerText = 'Hello Books!';

  fragment.append(hello);

  document.body.appendChild(fragment);
}
