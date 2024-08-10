import { FC, lazy, Suspense } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

const MainLayout = lazy(() => {
  return import("./layout/MainLayout");
});
const Home = lazy(() => {
  return import("./pages/Home");
});
const Login = lazy(() => {
  return import("./pages/Login");
});
const Users = lazy(() => {
  return import("./pages/Users");
});
const Products = lazy(() => {
  return import("./pages/Products");
});

const App: FC = () => {
  const loading: JSX.Element = (
    <p style={{ textAlign: "center", marginTop: "3em" }}>Loading...</p>
  );

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={loading}>
              <Home />
            </Suspense>
          ),
        },
        {
          path: "/products",
          element: (
            <Suspense fallback={loading}>
              <Products />
            </Suspense>
          ),
        },
        {
          path: "/users",
          element: (
            <Suspense fallback={loading}>
              <Users />
            </Suspense>
          ),
        },
        {
          path: "/Login",
          element: (
            <Suspense fallback={loading}>
              <Login />
            </Suspense>
          ),
        },
        {
          path: "*",
          element: <Navigate to="/" />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
