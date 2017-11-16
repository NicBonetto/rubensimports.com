import LandingPage from '../rubens-main/landing-page.jsx'
import MainService from '../service/service-main.jsx'

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
  }
]

export default routes