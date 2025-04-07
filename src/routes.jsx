import {Auth} from './pages/auth'
import {DashboardPage} from './pages/dashboard'
const routes =[
    {path: '/auth', element: <Auth />},
    {path: '/*', element: <DashboardPage />},
]

export default routes
