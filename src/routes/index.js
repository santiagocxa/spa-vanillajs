import Header from '../templates/Header'
import Home from '../pages/Home'
import Beers from '../pages/Beer'
import About from '../pages/About'
import Footer from '../templates/Footer'
import getHash from '../utils/getHash'
import resolveRoutes from '../utils/resolveRoutes'


const routes = {
  '/': Home,
  '/:id': Beers,
}

const router =  async () => {
  const header = null || document.getElementById('header')
  const content = null || document.getElementById('content')
  const footer = null || document.getElementById('footer')
  header.innerHTML = await Header()
  let hash = getHash()
  let route = await resolveRoutes(hash)
  let render = routes[route] ? routes[route] : About
  content.innerHTML = await render()
  footer.innerHTML = await Footer()
}

export default router
