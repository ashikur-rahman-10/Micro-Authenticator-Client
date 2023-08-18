import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/LoginRegister/Login";
import Register from "../Pages/LoginRegister/Register";
import ReviewAll from "../Pages/Home/Review/ReviewAll";
import AddReview from "../Pages/Home/Review/AddReview";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "login",
                element: <Login></Login>,
            },
            {
                path: "register",
                element: <Register></Register>,
            },
            {
                path: "reviewAll",
                element: <ReviewAll></ReviewAll>
            },
            {
                path: "addReview",
                element: <AddReview></AddReview>
            }
        ],
    },
]);
export default router;
