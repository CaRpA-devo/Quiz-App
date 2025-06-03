import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navigate } from 'react-router-dom';
import { useState } from "react";
import { GameEasy } from "./components/game/gameEasy.comp";
import { Lobby } from "./components/lobby/lobbyPage.comp";
import { LoginPage } from "./components/login/loginPage.comp";
import { GameWin } from "./components/endGame/gameWin.comp";

import { GameLose } from './components/endGame/gameLoose.comp';
function App() {


const [user, setUser] = useState(null);

const handleLogin = (loggedInUser) => {
  localStorage.setItem("user", JSON.stringify(loggedInUser)); // <---
  setUser(loggedInUser);
};

  return (
    <BrowserRouter>
      <Routes>
        {/* LOGIN */}
        <Route
          path="/"
          element={
            user ? <Navigate to="/lobby" /> : <LoginPage onLogin={handleLogin} />
          }
        />

        {/* LOBBY */}
        <Route
          path="/lobby"
          element={
            user ? <Lobby user={user} /> : <Navigate to="/" />
          }
        />

        {/* GAME */}
        <Route
          path="/game"
          element={
            user ? <GameEasy user={user} /> : <Navigate to="/" />
          }
        />

        {/* WIN */}
        <Route
          path="/win"
          element={
            user ? <GameWin user={user} /> : <Navigate to="/" />
          }
        />

        {/* LOSE */}
        <Route
          path="/lose"
          element={
            user ? <GameLose user={user} /> : <Navigate to="/" />
          }
        />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;