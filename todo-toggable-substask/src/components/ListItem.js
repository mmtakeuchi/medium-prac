import React from "react";

const ListItem = ({ title, tasks, switchStatus }) => {
	const renderTasks = (status) => {
		return tasks.map((subTask, index) => {
			const taskText = Object.keys(subTask)[0];

			if (subTask[taskText] === status)
				return (
					<p onClick={() => switchStatus(title, index, taskText)} key={index}>
						{taskText}
					</p>
				);
		});
	};

	return (
		<li>
			<div className='title'>{title}</div>
			<div className='tasks-status'>
				<div>
					<p className='title'>Not yet Completed</p>
					<ul>{renderTasks(false)}</ul>
				</div>
				<div>
					<p className='title'>Completed</p>
					<ul>{renderTasks(true)}</ul>
				</div>
			</div>
		</li>
	);
};

export default ListItem;
