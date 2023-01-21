import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routesConfig from "./data/routesConfig";

const router = createBrowserRouter(routesConfig);

function App() {
  return (
    <RouterProvider router={router}/>
  );
}



export default App;
