import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer>
			<ul className="footer__categories">
				<li>
					<Link to="/posts/categories/"></Link>Agriculture
				</li>
				<li>
					<Link to="/posts/categories/"></Link>Bussines
				</li>
				<li>
					<Link to="/posts/categories/"></Link>Education
				</li>
				<li>
					<Link to="/posts/categories/"></Link>Entertainment
				</li>
				<li>
					<Link to="/posts/categories/"></Link>Art
				</li>
				<li>
					<Link to="/posts/categories/"></Link>Investment
				</li>
				<li>
					<Link to="/posts/categories/"></Link>Uncategorized
				</li>
				<li>
					<Link to="/posts/categories/"></Link>Weather
				</li>
			</ul>
			<div className="footer__copyright">
				<small>All Rigths Reserved &copy; Copyright, Abrahan Piloto.</small>
			</div>
		</footer>
	);
};

export default Footer;
