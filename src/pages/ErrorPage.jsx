import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
	return (
		<section className="error-page">
			<div className="center">
				<h1>
					Sorry, Page Not Found <span> :(</span>
				</h1>
				<Link to="/" className="btn primary">
					Go Back Home
				</Link>
			</div>
		</section>
	);
};

export default ErrorPage;
