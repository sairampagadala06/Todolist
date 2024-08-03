Overview

This project is a Todo List application built using React. It allows users to create, update, mark tasks as completed, and search tasks. The tasks are displayed in a colorful, card-like format inspired by Google Keep.


System Design

The application is structured into several components:

    App: The main component that holds the state and logic for the entire application.
    TaskForm: A form component for creating new tasks.
    TaskList: A component that displays a list of tasks.
    TaskItem: A component that displays individual tasks, which can be expanded to show more details and editing options.

    Tasks are stored in a dummy JSON file and fetched when the application loads.
    Implementation

The application is implemented using functional components and hooks for state management. Here are some key points:

    State Management: useState is used to manage the state of tasks and search queries.
    Fetching Data: The useEffect hook is used to fetch initial task data from a JSON file.
    Task Management: Functions are provided to add, update, and filter tasks based on the search query.
    
    Setup and Run Instructions
Prerequisites

Ensure you have the following installed:

    Node.js (which includes npm)

    -> download the project 
    -> Navigate to the project directory(cd todolist)
    ->install dependencies(npm install)
    ->run (npm run dev).
    http://localhost:xxxx/ (server)
    
    
