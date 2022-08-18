import React from "react";
import "./App.css";

function App() {
	const ARRAY = [1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 5, 3, 5, 7, 4, 2];

	return (
		<div className='App'>
			<DivideBeforeConquer array={ARRAY} />
		</div>
	);
}

const DivideBeforeConquer = ({ array }) => {
	const middle = Math.floor(array.length / 2);
	const slice1 = array.slice(0, middle);
	const slice2 = array.slice(middle);

	return (
		<>
			<p className='row'>{`[${array.toString()}]`}</p>
			{array.length > 1 && (
				<div className='row'>
					<div className='column'>
						<DivideBeforeConquer array={slice1} />
					</div>
					<div className='column'>
						<DivideBeforeConquer array={slice2} />
					</div>
				</div>
			)}
		</>
	);
};

export default App;
