import React, { useState } from "react";

const Input = ({ addToList }) => {
	const [value, setValue] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		addToList(value);
		setValue("");
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				onChange={(e) => setValue(e.target.value)}
				value={value}
			/>
		</form>
	);
};

export default Input;
