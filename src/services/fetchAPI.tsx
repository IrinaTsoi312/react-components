const fetchResult = () => {
  const term = localStorage.getItem('searchValue');
  fetch(`https://swapi.dev/api/films/?search=${term}`)
    .then((res) => res.json())
    .catch((err) => {
      throw new Error(err);
    });
};

export default fetchResult;
