import React from "react";
import CheckList from "./components/CheckList";
import "./App.css";

const INITIAL_LIST = {
	"Organize closet": [
		{ "Donate old clothes and shoes": false },
		{ "Buy new shelf": false },
		{ "Put in shelf by color": false },
	],
	"Finish homework": [
		{ "Finish math homework": false },
		{ "Finish science homework": false },
		{ "Finish Reactjs homework": false },
	],
	"Achieve nirvana": [
		{ "Meditate a little": false },
		{ "Gain some wisdom": false },
	],
};

function App() {
	return (
		<div className='App'>
			<CheckList initialList={INITIAL_LIST} />
		</div>
	);
}

export default App;
