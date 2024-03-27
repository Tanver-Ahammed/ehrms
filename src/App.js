import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import About from './pages/About';
import Features from './pages/Features';
import MainLayout from './layout/MainLayout';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import {Doctors} from "./pages/Doctors";


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/features' element={<Features />} />
        <Route path='/doctors' element={<Doctors />} />

        <Route path='/*' element={<NotFound />} />


      </Route>

    )
  )
  return (

    <RouterProvider router={router} />
  );
}

export default App;
