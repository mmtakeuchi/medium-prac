import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
	const [query, setQuery] = useState("");
	const [users, setUsers] = useState([]);

	const fetchUsers = async () => {
		const resp = await fetch("https://randomuser.me/api?results=10");
		const data = await resp.json();
		setUsers(data.results);
	};

	useEffect(() => {
		fetchUsers();
	}, []);

	return (
		<div className='App'>
			<input
				type='text'
				value={query}
				onChange={(e) => setQuery(e.target.value)}
			/>
			<ul>
				{users
					?.filter(
						(user) =>
							user.name.first.toLowerCase().includes(query.toLowerCase()) ||
							user.name.last.toLowerCase().includes(query.toLowerCase())
					)
					.map((user) => (
						<li
							key={user.id.value}
						>{`${user.name.title}. ${user.name.first} ${user.name.last}`}</li>
					))}
			</ul>
		</div>
	);
}

export default App;
