import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../page/Home";
import Login from "../page/Login";
import NotFound from "../page/NotFound";
import Register from "../page/Register";
import AddBook from "../components/AddBook";
import BookDetails from "../components/BookDetails";
import EditBook from "../components/EditBook";
import PrivateRoute from "./PrivateRoute";

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
				path: "/books/:id",
				element: <BookDetails />,
			},
			{
				path: "/addBook",
				element: (
					<PrivateRoute>
						<AddBook />
					</PrivateRoute>
				),
			},
			{
				path: "/addBook/:id/edit",
				element: (
					<PrivateRoute>
						<EditBook />
					</PrivateRoute>
				),
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
