const Footer = () => {
	return (
		<div>
			<footer className="footer p-10 bg-neutral text-neutral-content">
				<div>
					<span className="footer-title">Book Catalog</span>
				</div>
				<div>
					<span className="footer-title">Company</span>
					<a className="link link-hover">About us</a>
					<a className="link link-hover">Contact</a>
				</div>
				<div>
					<span className="footer-title">Legal</span>
					<a className="link link-hover">Terms of use</a>
					<a className="link link-hover">Privacy policy</a>
					<a className="link link-hover">Cookie policy</a>
				</div>
			</footer>
			<h2 className="text-center mt-5">Book list redux practice app</h2>
		</div>
	);
};

export default Footer;
