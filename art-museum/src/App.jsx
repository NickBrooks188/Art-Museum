import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route, Outlet } from 'react-router-dom'
import harvardArt from './data/harvardArt';
import GalleryNavigation from './components/GalleryNavigation/GalleryNavigation';
import GalleryView from './components/GalleryView/GalleryView';
import ArtDescription from './components/ArtDescription/ArtDescription';

const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout />}>
    <Route path='galleries/:galleryId' element={<GalleryView galleries={harvardArt.records} />}>
      {/* <Route path='art' element={<h1>Art</h1>} index={true} /> */}
      <Route index={true} path='art/:artId' element={<ArtDescription galleries={harvardArt.records} />} />
    </Route>
    <Route path='/' element={<h2> Welcome to the art museum </h2>} />
    <Route path='*' element={<h2>Page Not Found</h2>} />
  </Route>
))

function Layout() {
  return (
    <div className="page-wrapper">
      <GalleryNavigation galleries={harvardArt.records} />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

function App() {
  console.log(harvardArt)
  return <RouterProvider router={router} />
}

export default App;
