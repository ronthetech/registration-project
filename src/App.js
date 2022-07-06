import React, { useState } from "react";
import Header from "./components/Header";
import "./App.css";

function App() {
	const [values, setValues] = useState({
		firstName: "",
		lastName: "",
		userName: "",
	});
	const [submitted, setSubmitted] = useState(false);

	const handleFirstNameInputChange = (e) => {
		setValues({ ...values, firstName: e.target.value });
	};
	const handleLastNameInputChange = (e) => {
		setValues({ ...values, lastName: e.target.value });
	};
	const handleUserNameInputChange = (e) => {
		setValues({ ...values, userName: e.target.value });
	};

	// useEffect(() => {
	// 	return () => {};
	// }, []);

	const handleFormSubmit = (e) => {
		e.preventDefault();
		setSubmitted(true);
	};

	return (
		<div className='App'>
			<Header />{" "}
			<div className='container'>
				{submitted ? <div className='register--message'>Success! Thank You for Registering.</div> : null}
				<form className='form' onSubmit={handleFormSubmit}>
					<input
						type='text'
						value={values.firstName}
						onChange={handleFirstNameInputChange}
						placeholder='First Name'
						name='firstName'
						id='firstName'
						className='form__firstName'
						required
					/>
					<input
						type='text'
						value={values.lastName}
						onChange={handleLastNameInputChange}
						placeholder='Last Name'
						name='lastName'
						id='lastName'
						className='form__lastName'
						required
					/>
					<input
						type='text'
						value={values.userName}
						onChange={handleUserNameInputChange}
						placeholder='User Name'
						name='userName'
						id='userName'
						className='form__userName'
					/>
					<button type='submit' className='form__btn'>
						submit
					</button>
				</form>
			</div>
		</div>
	);
}

export default App;

