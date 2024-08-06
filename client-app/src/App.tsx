import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";

const MainLayout = lazy(() => {
  return import("./layouts/MainLayout");
});
const Home = lazy(() => {
  return import("./pages/Home");
});

const App: React.FC = () => {
  const loading = <p style={{ textAlign: "center" }}>Loading page ...</p>;
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Suspense fallback={loading}>
          <MainLayout />
        </Suspense>
      ),
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={loading}>
              <Home />
            </Suspense>
          ),
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
