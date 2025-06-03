import "./loginPage.comp.css";
import { useState } from "react";
import { NavbarDRopdown } from "../navbar/navbarDropdown.comp";
import { Footer } from "./../footer/footer.comp.jsx";
import { Button } from "../UI/button/button.comp.jsx";
import toast, { Toaster } from "react-hot-toast";

// TODO noch useref setzten für login

export function LoginPage({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();

    if (!username.trim() || !password.trim()) {
      toast.error("Bitte Benutzername und Passwort eingeben.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:3001/users");
      const users = await response.json();

      const foundUser = users.find(
        (user) => user.username === username && user.password === password
      );

      if (foundUser) {
        toast.success("Login erfolgreich!");
        onLogin(foundUser);
      } else {
        // Benutzer nicht gefunden, neu erstellen
        const newUser = {
          username,
          password,
          score: 0,
          level: 1,
        };

        const createResponse = await fetch("http://localhost:3001/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newUser),
        });

        const createdUser = await createResponse.json();
        onLogin(createdUser);
      }
    } catch (err) {
      console.error("Fehler:", err);
      toast.error("Ein Fehler ist aufgetreten. Bitte versuche es erneut.");
    } finally {
      setTimeout(() => setIsLoading(false), 1000);
    }
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <NavbarDRopdown />
      <div
        className="hero min-h-screen bg-cover bg-center bg-no-repeat flex justify-center"
        style={{ backgroundImage: "url(./img/login.jpg)" }}
      >
        <div className="login-page-wrapper">
          <h1 className="login-title">Quizzomania</h1>
          <div className="login-page-container">
            <form onSubmit={handleLogin} className="login-form">
              <h1>Login</h1>

              <div className="form-group">
                <input
                  placeholder="Benutzername ..."
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  aria-label="Gib deinen Benutzernamen ein"
                />
              </div>

              <div className="form-group">
                <input
                  type="password"
                  placeholder="Passwort ..."
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  aria-label="Gib dein Passwort ein"
                />
              </div>

              <Button
                type="submit"
                className="login-button"
                text={isLoading ? "Wird geladen..." : "Login"}
                disabled={isLoading}
              />
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
