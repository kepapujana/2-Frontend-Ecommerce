import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginView from './components/Login/Login';
import ProfileView from './components/Profile/Profile';
import TheHeader from './components/TheHeader/TheHeader';
import { UserProvider } from './context/UserContext/UserState';

function App() {
  return (
    <UserProvider>
      <Router>
        <TheHeader />
        <Routes>
          <Route path="/login" element={<LoginView />} />
          <Route path="/profile" element={<ProfileView />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}
export default App;
