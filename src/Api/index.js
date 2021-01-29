export const getPhotos = () =>
  fetch(
    'https://jsonplaceholder.typicode.com/photos?_start=0&_limit=5',
  ).then(response => response.json());

export const getUsers = () =>
  fetch(
    'https://jsonplaceholder.typicode.com/users',
  ).then(response => response.json());
