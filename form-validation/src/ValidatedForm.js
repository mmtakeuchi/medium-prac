import React, { useState } from "react";

const ValidatedForm = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [accounts, setAccounts] = useState([
		{ username: "JohnDoe1", password: "1234567" },
	]);

	const resetValues = () => {
		setUsername("");
		setPassword("");
	};

	const validAccount = accounts.find(
		(account) => account.username === username && account.password === password
	);

	const onSubmit = (e) => {
		e.preventDefault();

		if (validAccount) {
			alert("Logged in successfully! Hi, " + username + ".");
			resetValues();
		} else if (username.length > 6 && password.length > 6) {
			setAccounts([...accounts, { username, password }]);
			alert("Logged in successfully! Welcome, " + username + ".");
			resetValues();
		} else {
			alert("Username and password must be more than 6 characters.");
			return;
		}
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
				onChange={(e) =>
					e.target.value.length < 20
						? setUsername(e.target.value)
						: alert("Username cannot exceed 20 characters.")
				}
				style={{ marginBottom: 5 }}
			/>
			<input
				value={password}
				type='text'
				onChange={(e) =>
					e.target.value.length < 20
						? setPassword(e.target.value)
						: alert("Password cannot exceed 20 characters.")
				}
				style={{ marginBottom: 10 }}
			/>
			<button style={{ alignSelf: "center" }} onClick={onSubmit}>
				Submit
			</button>
		</form>
	);
};

export default ValidatedForm;
