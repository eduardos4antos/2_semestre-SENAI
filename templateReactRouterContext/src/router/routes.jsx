import { createBrowserRouter } from "react-router-dom"; 
import Home from "../pages/Home";
import Contato from "../pages/Contato";
import Generica from "../pages/Generica";
import Final from "../pages/Final";
import Numero712 from "../pages/Numero712";
import Exercicio713 from "../pages/Exercicio713";

const router = createBrowserRouter([
    {path: "/", element: <Home />},
    {path: "/contato", element: <Contato />},
    {path: "/generica", element: <Generica />},
    {path: "/final", element: <Final />},
    {path: "/final", element: <Final />},
    {path: "/numero712", element: <Numero712 />},
    {path: "/exercicio713", element: <Exercicio713 />},


])

export default router;
