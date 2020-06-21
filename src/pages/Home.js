import getData from '../utils/getData'


const Home = async () => {
  const Beers = await getData();
  const view = `
  <div class="container-fluid">
    <div class="row Beers">
      ${Beers.map(beer =>`
        <article class="col-12 col-md-4 col-lg-3 Beer-item">
          <a href="#/${beer.id}/">
            <div class="item-img mb-3">
            <img src="${beer.image_url}" alt="${beer.name}">
            </div>
            <h2 class="mb-3">${beer.name} </h2>
          </a>
        </article>
      `).join('')}
    </div>
  </div>
  `
  return view
}

export default Home