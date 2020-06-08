import getData from '../utils/getData'

const Home = async () => {
  const Beers = await getData();
  const view = `
  <div class="Beers">
    ${Beers.map(beer =>`
      <article class="Beer-item">
        <a href="#/${beer.id}/">
          <img src="${beer.image_url}" alt="${beer.name}">
          <h2>${beer.name}</h2>
        </a>
      </article>
    `).join('')}
  </div>
  `
  return view
}

export default Home