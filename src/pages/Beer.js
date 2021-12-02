import getHash from '../utils/getHash';
import getData from '../utils/getData';

const Beer = async () => {
  const id = await getHash();
  const beer = await getData(id);
  const details = beer[0];

  const view = `
    <div class="beer">
      <div class="beer__inner">
        <article class="beer__card">
          <h2>${details.name}</h2>
          <div class="beer__card-content">
            <img src="${details.image_url}" atl=${details.name}>
          </div>
        </article>
        <article class="beer__details">
          <p>Description: <span>${details.description}</span></p>
          <p>First Mix: <span>${details.first_brewed}</span></p>
          <p>ABV Level: <span>${details.abv}</span></p>
          <p>Bitterness Level: <span>${details.ibu}</span></p>
          <p>Accompanying Foods: <span>${details.food_pairing}</span></p>
          <p>Brewers Tips: <span>${details.brewers_tips}</p><span></p>
        </article>
      </div>
    </div>
  `;
  return view;
};

export default Beer;
