import {createBrowserRouter,RouterProvider, Navigate} from "react-router-dom";
import {lazy, Suspense} from "react";
const MainLayout=lazy(()=>{return import("./layout/MainLayout.jsx");});
const Home=lazy(()=>{return import("./pages/Home.jsx");});


function App() {
  const loading=<p>Loading ...</p>
  const router=createBrowserRouter([
    {
      path:"/",
      element:<Suspense fallback={loading}><MainLayout/></Suspense>,
      children:[
        {
          index:true,
          element:<Suspense fallback={loading}><Home/></Suspense>
        }
      ],
    }
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App;
