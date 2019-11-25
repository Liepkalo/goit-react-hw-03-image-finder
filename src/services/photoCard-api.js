// eslint-disable-next-line import/prefer-default-export
export const fetchPhotoCards = (query = '', pageNumber = 1) => {
  return fetch(
    `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${query}&page=${pageNumber}&per_page=12&key=14394962-7157b89b212ffee5ae0417b6a`,
  )
    .then(res => res.json())
    .then(data => data.hits);
};
