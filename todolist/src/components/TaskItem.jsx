import React, { useState } from 'react';

const TaskItem = ({ task, updateTask }) => {
  const [expanded, setExpanded] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  const handleExpand = () => setExpanded(!expanded);

  const handleMarkDone = () => {
    const updatedTask = { ...task, completed: !task.completed };
    updateTask(updatedTask);
  };

  const handleSave = () => {
    const updatedTask = { ...task, title, description, timestamp: new Date().toISOString() };
    updateTask(updatedTask);
    setIsEditing(false);
  };

  return (
    <div className="task-item">
      <h3 onClick={handleExpand}>{task.title}</h3>
      {expanded && (
        <div className="task-details">
          {isEditing ? (
            <>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
              <button onClick={handleSave}>Save</button>
            </>
          ) : (
            <>
              <p>{task.description}</p>
              <p>{new Date(task.timestamp).toLocaleString()}</p>
              <button onClick={() => setIsEditing(true)}>Edit</button>
            </>
          )}
          <button onClick={handleMarkDone}>
            {task.completed ? 'Undo' : 'Mark as Done'}
          </button>
        </div>
      )}
    </div>
  );
};

export default TaskItem;
