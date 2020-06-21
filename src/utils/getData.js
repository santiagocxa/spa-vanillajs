const API = 'https://api.punkapi.com/v2/beers/'
const API_PAGE_3 = 'https://api.punkapi.com/v2/beers?page=3'

const getData = async(id) => {
  const apiURL = id ? `${API}${id}` : API_PAGE_3
    try {
      const response =  await fetch(apiURL)
      const data = await response.json()
      return  data
    }
    catch (error){
      console.log('Get Error', error)
    }
}

export default getData