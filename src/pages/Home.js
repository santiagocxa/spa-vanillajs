import getData from '../utils/getData';

const Home = async () => {
  const Beers = await getData();
  const view = `
  <div class="home">
    <div class="home__list">
      ${Beers.map(
        (beer) => `
        <article class="home__item">
          <a href="#/${beer.id}/">
           
              <img class="home__item-img" src="${beer.image_url}" alt="${beer.name}">
            
            <h2 class="home__item-title">${beer.name} </h2>
          </a>
        </article>
      `
      ).join('')}
    </div>
  </div>
  `;
  return view;
};

export default Home;
