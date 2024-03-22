import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import {Home, HomePage} from './Components';
import {BlackHole, Captcha, Firewall, IPBlocklist, Options, OptionsHome, RateLimiting} from './Components/Options';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/options" element={<Options />}>
        <Route path="" element={<OptionsHome />} />
        <Route path="recaptcha" element={<Captcha />} />
        <Route path="rate-limiting" element={<RateLimiting />} />
        <Route path="ip-blocklist" element={<IPBlocklist />} />
        <Route path="blackhole" element={<BlackHole />} />
        <Route path="firewall" element={<Firewall />} />
        
      </Route>
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
