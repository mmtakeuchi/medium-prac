import React from "react";
import Quiz from "./components/Quiz";
import { QUESTIONS } from "./data";
import "./App.css";

function App() {
	return (
		<div className='App'>
			<Quiz questions={QUESTIONS} />
		</div>
	);
}

export default App;
