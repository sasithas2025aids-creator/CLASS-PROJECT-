import { BrowserRouter, Routes, Route } from "react-router-dom";
import Project from './pages/Project';
import Tasks from './pages/Tasks';
import Login from './pages/Login';
import Calender from './pages/Calender';
import Clients from './pages/Clients';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import Team from './pages/Team';


function App() {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Login />} />
                <Route path="/project" element={<Project />} />
                <Route path="/tasks" element={<Tasks />} />
                <Route path="/calender" element={<Calender />} />
                <Route path="/clients" element={<Clients />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/team" element={<Team />} />
                

            </Routes>
        </BrowserRouter>
    );
}

export default App;