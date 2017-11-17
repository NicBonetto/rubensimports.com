import LandingPage from '../rubens-main/landing-page.jsx'
import MainService from '../service/service-main.jsx'
import About from '../rubens-main/about.jsx'

const routes = [
  {
    path: '/',
    exact: true,
    component: LandingPage
  },
  {
    path: '/home/services',
    exact: true,
    component: MainService
  },
  {
    path: '/home/about',
    exact: true,
    component: About
  }
]

export default routes