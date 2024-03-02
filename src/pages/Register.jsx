import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
	const [userData, setUserData] = useState({
		name: "",
		email: "",
		password: "",
		password2: "",
	});

	const changeInputHandler = (e) => {
		setUserData((prevState) => {
			return { ...prevState, [e.target.name]: e.target.value };
		});
	};
	// const changeInputHandler = (e) => {
	// 	setUserData((prevState) => {
	// 		const updatedState = { ...prevState, [e.target.name]: e.target.value };
	// 		console.log(updatedState); // Imprime el estado actualizado de userData
	// 		return updatedState;
	// 	});
	// };

	return (
		<section className="register">
			<div className="container">
				<form className="form register__form">
					<h2>Sign Up</h2>
					<p className="form__error-message">This in an error message</p>
					<input
						type="text"
						placeholder="Full Name"
						name="name"
						value={userData.name}
						onChange={changeInputHandler}
					/>
					<input
						type="text"
						placeholder="Email"
						name="email"
						value={userData.email}
						onChange={changeInputHandler}
					/>
					<input
						type="password"
						placeholder="Password"
						name="password"
						value={userData.password}
						onChange={changeInputHandler}
					/>
					<input
						type="password"
						placeholder="Confirm password"
						name="password2"
						value={userData.password}
						onChange={changeInputHandler}
					/>
					<button type="submit" className="btn primary">
						Register
					</button>
				</form>
				<small className="small">
					Already have an account?{" "}
					<Link to="/login" className="small">
						Sign in
					</Link>
				</small>
			</div>
		</section>
	);
};

export default Register;
