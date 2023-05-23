import {createBrowserRouter} from "react-router-dom"
import Layout from "./component/Layout"
import Home from "./views/Home"
import Works from "./views/Works"

const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/works",
                element: <Works/>
            }
        ]
    }
])

export default router