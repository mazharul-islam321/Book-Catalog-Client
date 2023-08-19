import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useAppDispatch } from "./redux/hook";
import { setLoading, setUser } from "./redux/features/user/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./lib/firebase";
import { useEffect } from "react";

function App() {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(setLoading(true));

		onAuthStateChanged(auth, (user) => {
			if (user) {
				dispatch(setUser(user.email!));
				dispatch(setLoading(false));
			} else {
				dispatch(setLoading(false));
			}
		});
	}, [dispatch]);

	return (
		<div>
			<Header></Header>
			<Outlet></Outlet>
			<Footer></Footer>
		</div>
	);
}

export default App;
