import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "./UserContext";
import "./App.css";

function App() {
	const { userState, setUserState } = useContext(UserContext);

	const renderUsers = Object.entries(userState).map(([user, status], i) => {
		return (
			<li key={i}>
				{user}: <span>{status ? "🟢 " : "🔴"}</span>
			</li>
		);
	});

	useEffect(() => {
		const changeStatus = () => {
			const randomIndex = Math.floor(
				Math.random() * Object.keys(userState).length
			);
			const selectUser = Object.keys(userState)[randomIndex];
			const newUserState = {
				...userState,
				[selectUser]: !selectUser,
			};

			setUserState(newUserState);
		};

		const interval = setInterval(changeStatus, 2000);
		return () => clearInterval(interval);
	}, [userState]);

	return (
		<div className='App'>
			<ul>{renderUsers}</ul>
		</div>
	);
}

export default App;
