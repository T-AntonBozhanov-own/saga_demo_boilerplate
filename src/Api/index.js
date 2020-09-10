export const getPhotos = () =>
  fetch('https://jsonplaceholder.typicode.com/photos').then(response =>
    response.json(),
  );
