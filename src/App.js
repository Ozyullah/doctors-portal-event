import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './RouterPages/LinkRouter/ActionRouter';

function App() {
  return (
    <div className=" w-10/12 mx-auto">
     {/* <h1>This is Start Page</h1> */}

     <RouterProvider router={router}>
     </RouterProvider>
    </div>
  );
}

export default App;
