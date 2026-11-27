
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Project from './pages/Project';
import Tasks from './pages/Tasks';
import Login from './pages/Login';
import Register from './pages/Register';
import Calender from './pages/Calender';
import Clients from './pages/Clients';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import Team from './pages/Team';

// Admin pages
import Adminlayout from './pages/admin/Adminlayout';
import AdminDashboard from './pages/admin/Dashboard';
import AdminSettings from './pages/admin/Settings';
import Userdetails from './pages/admin/Userdetails';

function App() {
    return (
        <BrowserRouter>
            <Routes>

                {/* Existing Routes */}
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/project" element={<Project />} />
                <Route path="/tasks" element={<Tasks />} />
                <Route path="/calender" element={<Calender />} />
                <Route path="/clients" element={<Clients />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/team" element={<Team />} />

                {/* Parent Routing */}
                <Route path="/admin" element={<Adminlayout />}>

                    {/* Child Routes */}
                    <Route path="dashboard" element={<AdminDashboard />} />
                    <Route path="settings" element={<AdminSettings />} />
                    <Route path="userdetails" element={<Userdetails />} />

                </Route>

            </Routes>
        </BrowserRouter>
    );
}

export default App;
