import React, { useState } from "react";
import Question from "./Question";

const Quiz = ({ questions }) => {
	const [score, setScore] = useState(0);
	const [activeQuestion, setActiveQuestion] = useState(0);

	const updateQuestion = (idx, answer) => {
		if (answer === idx) {
			setScore((prevScore) => prevScore + 1);
		}

		setActiveQuestion((prevQuestion) => prevQuestion + 1);
	};

	const resetQuiz = () => {
		setActiveQuestion(0);
		setScore(0);
	};

	const renderQuestions = questions.map((question, i) => (
		<Question
			key={i}
			data={question}
			idx={i}
			activeQuestion={activeQuestion}
			updateQuestion={updateQuestion}
		/>
	));

	return (
		<div className='quiz-container'>
			{activeQuestion < questions.length ? (
				renderQuestions
			) : (
				<div className='question'>
					{score}
					<button onClick={() => resetQuiz()}>Reset Quiz</button>
				</div>
			)}
		</div>
	);
};

export default Quiz;
