import {createBrowserRouter} from "react-router-dom"
import Home from "./page/Home"
import Beranda from "./page/Beranda"
import Contact from "./page/Contact"
import ListMobil from "./page/ListMobil"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path:"/beranda",
        element:<Beranda/>
    },
    {
        path:"/listMobil",
        element:<ListMobil/>
    },
    {
        path:"/contact",
        element:<Contact/>
    },
])

export default router