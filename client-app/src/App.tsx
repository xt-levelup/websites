import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { lazy, Suspense } from "react";

const MainLayout = lazy(() => {
  return import("./layouts/MainLayout");
});
const Home = lazy(() => {
  return import("./pages/Home");
});
const Cart = lazy(() => {
  return import("./pages/Cart");
});
const Orders = lazy(() => {
  return import("./pages/Orders");
});
const Products = lazy(() => {
  return import("./pages/Products");
});
const SignIn = lazy(() => {
  return import("./pages/SignIn");
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
        {
          path: "/cart",
          element: (
            <Suspense fallback={loading}>
              <Cart />
            </Suspense>
          ),
        },
        {
          path: "/orders",
          element: (
            <Suspense fallback={loading}>
              <Orders />
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
          path: "/sign-in",
          element: (
            <Suspense fallback={loading}>
              <SignIn />
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
