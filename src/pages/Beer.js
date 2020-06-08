import getHash from '../utils/getHash'
import getData from '../utils/getData'


const Beer = async () => {
  const id = await getHash()
  const beer = await getData(id)
  const details = beer[0]

  const view = `
    <div class="Beer-inner">
      <article class="Beers-card">
        <img src="${details.image_url}" atl=${details.name}>
        <h2>Name: ${details.name}<h2>
      </article>
      <article>
        <h3>Description: <span>${details.description}</span></h3>
        <h3>First Mix: <span>${details.first_brewed}</span></h3>
        <h3>ABV Level: <span>${details.abv}</span></h3>
        <h3>Bitterness Level: <span>${details.ibu}</span></h3>
        <h3>Accompanying Foods: <span>${details.food_pairing}</span></h3>
        <h3>Brewers Tips: <span>${details.brewers_tips}</p><span></h3>
      </article>
    </div>
  `
  return view
}

export default Beer