import { 
  createBrowserRouter, 
  Route, 
  NavLink, 
  createRoutesFromElements, 
  RouterProvider } from 'react-router-dom';

// pages
import Home from './pages/Home';
import About from './pages/About';

// layouts
import RootLayout from './layouts/RootLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      {/* Index specifies that this is the home page */}
      <Route index element={<Home />}/> 
      <Route path="about" element={<About />}/>
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;