import { useState } from "react";
import "./App.css";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const initialTasks = [
  {
    id: "1",
    text: "React.js",
  },
  {
    id: "2",
    text: "HTML/CSS",
  },
  {
    id: "3",
    text: "AWS",
  },
  {
    id: "4",
    text: "JavaScript",
  },
];

const initialPractices = [
  {
    id: "5",
    text: "Hooks",
  },
  {
    id: "6",
    text: "HTML elements",
  },
  {
    id: "7",
    text: "VISUALIZACION",
  },
  {
    id: "8",
    text: "CONDICIONALES",
  },
];


const reorder = (list, startIndex, endIndex) => {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [practices, setPractices] = useState(initialPractices);
  return (
    <DragDropContext
      onDragEnd={(result) => {
        
        const { source, destination } = result;
        if (!destination) {
          return;
        }
        if (
          source.index === destination.index &&
          source.droppableId === destination.droppableId
        ) {
          return;
        }
        if(source.droppableId === "tasks"){
        setTasks((prevTasks) =>
          reorder(prevTasks, source.index, destination.index)
        );
        }
        if(source.droppableId === "practices"){
        setPractices((prevPractices) =>
          reorder(prevPractices, source.index, destination.index)
        );
        }
      }}
    >

      <div className="app">
        
        <Droppable droppableId="tasks">
          {(droppableProvided) => (
            <ul
              {...droppableProvided.droppableProps}
              ref={droppableProvided.innerRef}
              className="task-container"
            >
              <h1>Estudiar</h1>
              {tasks.map((task, index) => (
                <Draggable key={task.id} draggableId={task.id} index={index}>
                  {(draggableProvided) => (
                    <li
                      {...draggableProvided.draggableProps}
                      ref={draggableProvided.innerRef}
                      {...draggableProvided.dragHandleProps}
                      className="task-item"
                    >
                      {task.text}
                    </li>
                  )}
                </Draggable>
              ))}
              {droppableProvided.placeholder}
            </ul>
          )}
        </Droppable>
        <Droppable droppableId="practices">
          {(droppableProvided) => (
            <ul
              {...droppableProvided.droppableProps}
              ref={droppableProvided.innerRef}
              className="task-container"
            >
              <h1>Practicas</h1>
              {practices.map((practice, index) => (
                <Draggable key={practice.id} draggableId={practice.id} index={index}>
                  {(draggableProvided) => (
                    <li
                      {...draggableProvided.draggableProps}
                      ref={draggableProvided.innerRef}
                      {...draggableProvided.dragHandleProps}
                      className="task-item"
                    >
                      {practice.text}
                    </li>
                  )}
                </Draggable>
              ))}
              {droppableProvided.placeholder}
            </ul>
          )}
        </Droppable>

      </div>
    </DragDropContext>
  );
}

export default App;
