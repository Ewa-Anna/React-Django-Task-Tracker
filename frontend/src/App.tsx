import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import "./globals.css";
import SigninForm from "./_auth/forms/SigninForm";
import { Home } from "./_root/pages";
import AuthLayout from "./_auth/forms/AuthLayout";
import RootLayout from "./_root/RootLayout";
import SignupForm from "./_auth/forms/SignupForm";
import { Toaster } from "./components/ui/toaster";
import CreateProject from "./_root/pages/CreateProject";
import AllUsers from "./_root/pages/AllUsers";
import CreateTicket from "./_root/pages/CreateTicket";
import EditProject from "./_root/pages/EditProject";
import EditTicket from "./_root/pages/EditTicket";
import ProjectDetails from "./_root/pages/ProjectDetails";
import TicketDetails from "./_root/pages/TicketDetails";
import Profile from "./_root/pages/Profile";
import Tickets from "./_root/pages/Tickets";
import Projects from "./_root/pages/Projects";
import Dashboard from "./_root/pages/Dashboard";
import ManageProfileLayout from "./_root/ManageProfileLayout";
import ProfileForm from "./components/forms/ProfileForm/ProfileForm";
import AccountForm from "./components/accountForm/AccountForm";
import NotificationForm from "./components/forms/notificationForm/NotificationForm";


function App() {

  
  return (
    <main className="flex h-screen">
      <Routes>
        {/* public routes */}

        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SigninForm />} />
          <Route path="/sign-up" element={<SignupForm />} />
        </Route>

        {/* private routes */}

        <Route element={<RootLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="create-project" element={<CreateProject />} />
          <Route path="create-ticket" element={<CreateTicket />} />
          <Route path="edit-project:/id" element={<EditProject />} />
          <Route path="edit-ticket/:id" element={<EditTicket />} />
          <Route path="projects/project/:id" element={<ProjectDetails />} />
          <Route path="tickets/ticket/:id" element={<TicketDetails />} />
          <Route path="profile/:id" element={<Profile />} />
          <Route path="all-users" element={<AllUsers />} />
          <Route path="tickets" element={<Tickets />} />
          <Route path="projects" element={<Projects />} />

          <Route path="manage" element={<ManageProfileLayout/>} >

<Route index element={<ProfileForm/>}/>
<Route path="account" element={<AccountForm/>}/>
<Route path="notifications" element={<NotificationForm/>}/>
            </Route>
        </Route>
      </Routes>
      <Toaster />
    </main>
  );
}

export default App;
