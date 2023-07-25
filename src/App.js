import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './RouterPages/LinkRouter/ActionRouter';
import MapLocation from './Pages/SharedPages/GoogleMap/MapLocation';

function App() {

//   const selectedLocation = {
//     lat: 37.7749,
//     lng: -122.4194,
// };

  return (
    <div className=" max-w-[1440px]">
     {/* <h1>This is Start Page</h1> */}

     <RouterProvider router={router}>
     </RouterProvider>

     {/* <MapLocation selectedLocation={selectedLocation} /> */}
    </div>
  );
}

export default App;
