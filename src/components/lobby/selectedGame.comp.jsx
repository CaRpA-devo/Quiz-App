import "../lobby/selectedGame.style.css";
import "../lobby/lobbyPage.style.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { InputFieldDropdown } from "../UI/inputField/inputDropdown-component";
import { Button } from "../UI/button/button.comp";
import toast, { Toaster } from "react-hot-toast";

export function SelectedGame() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [mode, setMode] = useState("");

  const [categories, setCategories] = useState([]);
  const [levels, setLevels] = useState([]);

  // Fragen abrufen und Kategorien + Level extrahieren
  useEffect(() => {
    const fetchInformations = async () => {
      try {
        const res = await fetch("http://localhost:3001/questions");
        const data = await res.json();

        const filteredCategories = [
          ...new Set(data.map((q) => q.category)),
        ];
        const filteredLevels = [
          ...new Set(data.map((q) => q.difficulty)),
        ];
        setCategories(filteredCategories);
        setLevels(filteredLevels);
      } catch (error) {
        console.error("Fehler beim Laden der Fragen:", error);
      }
    };
    fetchInformations();
  }, []);

  // Button-Klick-Logik
  const selectModeHandler = (selected) => {
    setMode(selected);
    if (selected === "Multi") {
      toast("Seite coming soon...", {
        icon: "🚧",
        duration: 3000,
        position: "top-right",
      });
    }
  };


const navigate = useNavigate();

  const startGameHandler = () => {
    if (selectedCategory && selectedLevel && mode === "Single") {
      
     navigate("/game", {
  state: {
    category: selectedCategory,
    difficulty: selectedLevel,
    mode,
  },
});

      console.log("Spiel starten mit", {
  category: selectedCategory,
  difficulty: selectedLevel,
  mode,
});
    } else {
      toast.error("Bitte wähle alle Optionen aus", {
        duration: 3000,
         icon: "⚠️",
        position: "top-right",
      });
    }
  };

  const isFormComplete =
    selectedCategory && selectedLevel && mode === "Single";

  return (
    <div
      className="hero min-h-screen bg-cover bg-center flex justify-center"
      style={{ backgroundImage: "url(./img/lobby-game.jpg)" }}
    >
      <div>
     <InputFieldDropdown
  label="Kategorien"
  value={selectedCategory}
  onChange={(e) => setSelectedCategory(e.target.value)}
  options={categories}
   className={`cursor-pointer text-2xl text-pink-500 border-pink-500
    focus:outline-none focus:ring-2 focus:ring-pink-300 neon-pink-hover-label
    ${selectedCategory ? "activ-label" : ""}`}
/>

        <h5 className="block text-3xl font-medium text-center">Players</h5>
        <div className="flex justify-center gap-20 items-center input-caret">
          <Button
            text="Single"
            onClickHandler={() => selectModeHandler("Single")}
            className={`neon-play-btn rounded-full  p-1 w-30 text-2xl 
               border-pink-500 focus:ring-pink-300 text-pink-500 ${
              mode === "Single" ? "activ-game" : ""
            }`}
          />
          <Button
            text="Multi"
            onClickHandler={() => selectModeHandler("Multi")}
            className={`neon-play-btn rounded-full p-1 w-30 text-2xl 
               focus:ring-pink-300 text-pink-500  ${
              mode === "Multi" ?"activ-game" : ""
            }`}
          />
        </div>

        <InputFieldDropdown
          label="Level"
          value={selectedLevel}
          onChange={(e) => setSelectedLevel(e.target.value)}
          options={levels}
    className={`cursor-pointer text-2xl text-pink-500 border-pink-500
    focus:outline-none focus:ring-2 focus:ring-pink-300 neon-pink-hover-label
    ${selectedLevel ? "activ-label" : ""}`}
        />

        <div className="flex justify-center mt-6 items-center">
          <Button
            text="Play the Game"
            onClickHandler={startGameHandler}
            disabled={!isFormComplete}
            className={`neon-play-btn rounded-full font-bold  p-2 w-40 text-2xl 
               text-pink-500 ${
              !isFormComplete ? "opacity-50  cursor-not-allowed" : "active-game"
            }`}
          />
        </div>

        <Toaster position="top-right" />
      </div>
    </div>
  );
}
