import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignupForm from './components/Signup';
import LoginForm from './components/Login';
import ResetPasswordRequest from './components/RequestPasswordReset';
import ResetPassword from './components/ResetPassword';
import ActivateAccount from './components/ActivateAccount';
import ResendActivationEmail from "./components/ResendActivationEmail";
import PublicPage from "./pages/PublicPage";
import Dashboard from "./pages/Dashboard";
import { registerLicense } from '@syncfusion/ej2-base';
registerLicense('Ngo9BigBOggjHTQxAR8/V1NDaF1cX2hIfEx3RXxbf1x0ZFJMZVhbRX5PIiBoS35RckRhWXxfeXFRR2hUVUd+');

function App() {
    const isAuthenticated = localStorage.getItem('authToken');

    return (

            <Router>
                <Routes>
                    <Route path="/" element={<PublicPage />} />
                    <Route path='/dashboard' element={isAuthenticated ?<Dashboard /> : <LoginForm/>}/>
                    <Route path="/register" element={<SignupForm />} />
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/reset-password-request" element={<ResetPasswordRequest />} />
                    <Route path="/reset-password/:token" element={<ResetPassword />} />
                    <Route path="/activate/:token" element={<ActivateAccount />} />
                    <Route path="/resend-activation-email" element={<ResendActivationEmail />} />

                </Routes>
            </Router>
    );
}

export default App;