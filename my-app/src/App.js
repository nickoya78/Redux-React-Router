import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";
import HomePage from "./components/Home";
import NotFoundPage from "./components/NotFoundPage";
import User from "./components/User";

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/" className="link">
              <h2>Home</h2>
            </Link>
          </li>
          <li>
            <Link to="/services" className="link">
              <h2>Services</h2>
            </Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="/users/:id" element={<User />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>
    </Router>
  );
}

export default App;
