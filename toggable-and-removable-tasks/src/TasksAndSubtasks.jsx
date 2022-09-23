import React, { useState } from 'react';
import Subtask from './Subtask';

const TasksAndSubtasks = ({ taskArray, setTaskArray }) => {
  const [completedSubtasks, setCompletedSubtasks] = useState([]);
  const [tasks, setTasks] = useState(taskArray);

  const clearCompleted = (e) => {
    e.preventDefault();

    const completedTasks = taskArray.filter(({ task, subtasks }) => {
      const erasedSubtasks = subtasks.filter(
        (subtask) => !completedSubtasks.includes(subtask)
      );

      return erasedSubtasks.length >= 1 ? { task, subtask: subtasks } : '';
    });

    setTasks(completedTasks);
  };

  return (
    <>
      <button onClick={clearCompleted}>Clear completed tasks</button>
      <ul style={{ listStyle: 'none' }}>
        {tasks.map(({ task, subtasks, i }) => (
          <li key={task}>
            <p>{task}</p>
            <ul style={{ listStyle: 'none' }}>
              {subtasks.map((subtask, j) => (
                <Subtask
                  key={j}
                  item={subtask}
                  setCompletedSubtasks={setCompletedSubtasks}
                />
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TasksAndSubtasks;
