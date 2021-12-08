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
          <div class="beer__card-content">
            <img src="${details.image_url}" atl=${details.name}>
          </div>
          <h2>${details.name}</h2>
        </article>
        <article class="beer__details">
          <p>${details.description}</p>
          <p>
            <span>First Mix:</span> ${details.first_brewed}  
          </p>
          <p>
            <span>ABV Level:</span> ${details.abv}  
          </p>
          <p>
            <span>Bitterness Level: </span> ${details.ibu}  
          </p>
          <p>
            <span>Accompanying Foods: </span> ${details.food_pairing}  
          </p>
          <p>
            <span>Brewers Tips:</span> ${details.brewers_tips} 
          </p>
        </article>
      </div>
    </div>
  `;
  return view;
};

export default Beer;
