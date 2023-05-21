import "./App.css";
import { useState } from "react";
import { ThemeContext } from "./context/ThemeContext";
function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((p) => (p == "dark" ? "light" : "dark"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div>
        <header className={`header${theme}`}>
          <button
            onClick={() => {
              setTheme(theme == "dark" ? "light" : "dark");
            }}
            className={`button${theme}`}
          >
            Change Theme
          </button>
        </header>
        <main className={`main${theme}`}>body</main>
        <footer className={`footer${theme}`}>Footer</footer>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
