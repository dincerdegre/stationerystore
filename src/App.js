import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layouts/Layout";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
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
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router}/>
  );
}



export default App;
