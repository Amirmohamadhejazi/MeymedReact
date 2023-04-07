import Home from "./component/home/index.jsx";
import Header from "src/component/Header";
import FooterPage from "src/component/footer";
import {error404} from "src/assets/img/index.js";
import {
    createBrowserRouter,
    RouterProvider,

} from "react-router-dom";
function App() {

const router = createBrowserRouter([
    {
        path: "/MeymedReact/",
        element: <Home/>,
    },
    {
        path: "/MeymedReact/*",
        element: <>
            <img src={error404} alt=""/>
        </>,
    },
]);

  return (
    <div className="d-flex justify-content-center flex-column bg_White trn3 container ">
        <Header/>
        <RouterProvider router={router} />
        <FooterPage/>
    </div>
  )
}

export default App
