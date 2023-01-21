import Layout from "../components/Layouts/Layout";
import Cart from "../pages/Cart/Cart";
import Checkout from "../pages/Checkout/Checkout";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import Product from "../pages/Product/Product";

const routesConfig = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "*",
        element: <NotFound />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product/:slug",
        element: <Product />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/404",
        element: <NotFound />,
      },
    ],
  },
];

export default routesConfig;