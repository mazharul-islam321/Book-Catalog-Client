import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { signOut } from "firebase/auth";
import { auth } from "../lib/firebase";
import { setUser } from "../redux/features/user/userSlice";

const Header = () => {
	const { user } = useAppSelector((state) => state.user);

	const dispatch = useAppDispatch();

	const handleLogOut = () => {
		console.log("log out");

		signOut(auth).then(() => {
			// Sign-out successful.
			dispatch(setUser(null));
		});
	};

	return (
		<div className="navbar bg-base-100">
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex={0} className="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</label>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
					>
						<li>
							<Link to="/home">Home</Link>
						</li>

						<li>
							<Link to="/allBooks">Add Book</Link>
						</li>
					</ul>
				</div>

				<Link to="/" className="btn btn-ghost normal-case text-xl">
					Book Catalog
				</Link>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">
					<li>
						<Link to="/home">Home</Link>
					</li>

					<li>
						<Link to="/addBook">Add Book</Link>
					</li>
				</ul>
			</div>
			<div className="navbar-end">
				{user.email ? (
					<div onClick={handleLogOut} className="btn">
						Log-Out
					</div>
				) : (
					<>
						<Link to="/login" className="btn mr-4">
							Sign In
						</Link>

						<Link to="/signup" className="btn">
							Sign Up
						</Link>
					</>
				)}
			</div>
		</div>
	);
};

export default Header;
