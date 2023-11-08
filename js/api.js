export const fetchPhotos = () => {
  return fetch('https://jsonplaceholder.typicode.com/photos?_limit=100').then(
    response => {
      if (!response.ok) {
        throw new Error(response.status);
      }

      return response.json();
    }
  );
};
