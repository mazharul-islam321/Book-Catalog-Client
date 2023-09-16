import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../page/Home";
import Login from "../page/Login";
import NotFound from "../page/NotFound";
import Register from "../page/Register";
import AllBooks from "../components/AllBooks";
import AddBook from "../components/AddBook";
import BookDetails from "../components/BookDetails";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/home",
				element: <Home />,
			},
			{
				path: "/allBooks",
				element: <AllBooks />,
			},
			{
				path: "/books/:id",
				element: <BookDetails />,
			},
			{
				path: "/addBook",
				element: <AddBook />,
			},
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/signup",
				element: <Register />,
			},
		],
	},
	{
		path: "*",
		element: <NotFound />,
	},
]);

export default router;
