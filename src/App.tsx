import Header from "./components/Header/Header.js";
import { useTheme } from "./context/ThemeContext.js";
import Main from "./pages/Main/Main.js";

function App() {
  const { isDark } = useTheme();
  return (
    <div className={`${isDark ? "dark" : "light"}`}>
      <Header />
      <div className="container">
        <Main />
      </div>
    </div>
  );
}

export default App;
