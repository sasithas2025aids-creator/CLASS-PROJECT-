
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/login.jsx";
import Project from "./pages/project.jsx";
import Tasks from "./pages/tasks.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Login />} />

                <Route path="/project" element={<Project />} />

                <Route path="/tasks" element={<Tasks />} />

            </Routes>
        </BrowserRouter>
    );
}

export default App;
