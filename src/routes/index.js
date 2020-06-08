import Header from '../templates/Header'
import Home from '../pages/Home'
import Beers from '../pages/Beer'
import Error404 from '../pages/Error404'
import resolveRoutes from '../utils/resolveRoutes'
import getHash from '../utils/getHash'



const routes = {
  '/': Home,
  '/:id': Beers,
  '/contact': 'contact',
}

const router =  async () => {
  const header = null || document.getElementById('header')
  const content = null || document.getElementById('content')
  header.innerHTML = await Header()
  let hash = getHash()
  let route = await resolveRoutes(hash)
  let render = routes[route] ? routes[route] : Error404
  content.innerHTML = await render()
}

export default router
