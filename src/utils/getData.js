const API = 'https://api.punkapi.com/v2/beers/'

const getData = async(id) => {
  const apiURL = id ? `${API}${id}` : API
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