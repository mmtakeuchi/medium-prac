import React, { useState } from "react";

const ValidatedForm = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [accounts, setAccounts] = useState([
		{ username: "JohnDoe1", password: "1234567" },
	]);

	const onSubmit = (e) => {
		// YOUR CODE HERE
	};

	return (
		<form
			style={{
				display: "flex",
				flexDirection: "column",
				border: "solid",
				padding: 10,
			}}
			onSubmit={onSubmit}
		>
			<h3>Login</h3>
			<input
				value={username}
				type='text'
				onChange={/* MORE OF YOUR CODE HERE */ () => {}}
				style={{ marginBottom: 5 }}
			/>
			<input
				value={password}
				type='text'
				onChange={/* MORE OF YOUR CODE HERE */ () => {}}
				style={{ marginBottom: 10 }}
			/>
			<button style={{ alignSelf: "center" }} onClick={onSubmit}>
				Submit
			</button>
		</form>
	);
};

export default ValidatedForm;
