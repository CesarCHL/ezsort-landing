import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import EzsortLanding from './pages/landing.tsx';
import Mision from './pages/mision.tsx';
import Team from './pages/company/team.tsx';
import Facilities from './pages/company/facilities.tsx';
import Services from './pages/services/our_services.tsx';
import Pricing from './pages/services/pricing.tsx';
import Testimonies from './pages/testimonies.tsx';

const router = createBrowserRouter ([
  {
  path: '/',
  element: <EzsortLanding/>,
},
{
  path: 'mision&vision',
  element: <Mision/>,
},
{
  path: '/team',
  element: <Team/>,
},
{
  path: '/facilities',
  element: <Facilities/>
},
{
  path: '/services',
  element: <Services/>
},
{
  path: '/pricing',
  element: <Pricing/>
},
{
  path: '/testimonies',
  element: <Testimonies/>
}
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
