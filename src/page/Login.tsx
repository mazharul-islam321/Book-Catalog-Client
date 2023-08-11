const Login = () => {
	const handleLogIn = (event: {
		preventDefault: () => void;
		target: any;
	}) => {
		event.preventDefault();

		const form = event.target;
		const email = form.email.value;
		const pasword = form.password.value;
		console.log("object->>", email, pasword);
	};

	return (
		<div className="hero min-h-screen bg-base-200">
			<div className="hero-content flex-col">
				<div className="text-center lg:text-left">
					<h1 className="text-5xl font-bold mb-4">Please Login !</h1>
				</div>
				<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
					<form onSubmit={handleLogIn} className="card-body">
						<div className="form-control">
							<label className="label">
								<span className="label-text">Email</span>
							</label>
							<input
								type="email"
								name="email"
								placeholder="email"
								className="input input-bordered"
								required
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Password</span>
							</label>
							<input
								type="password"
								name="password"
								placeholder="password"
								className="input input-bordered"
								required
							/>
						</div>
						<div className="form-control mt-6">
							<button className="btn btn-primary">Login</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
