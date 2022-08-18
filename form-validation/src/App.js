import React from "react";
import ValidatedForm from "./ValidatedForm";
import "./App.css";

function App() {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				paddingTop: 20,
			}}
		>
			<ValidatedForm />
		</div>
	);
}

export default App;
