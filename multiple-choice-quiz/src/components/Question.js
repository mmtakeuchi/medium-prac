import React from "react";

const Question = ({
	data: { question, answers, correct },
	activeQuestion,
	idx,
	updateQuestion,
}) => {
	const renderAnswers = answers.map((answer, i) => (
		<li key={i} onClick={() => updateQuestion(i, correct)}>
			{answer}
		</li>
	));

	return (
		<>
			{activeQuestion === idx && (
				<div className='question'>
					<h3>{question}</h3>
					<ul>{renderAnswers}</ul>
				</div>
			)}
		</>
	);
};

export default Question;
