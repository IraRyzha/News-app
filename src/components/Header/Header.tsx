import { useTheme } from "../../context/ThemeContext.js";
import { formatDate } from "../../helpers/formatDate.js";
import { themeIcons } from "../../assets/index.js";
import styles from "./styles.module.css";

function Header() {
  const { isDark, toggleTheme } = useTheme();
  return (
    <header className={`header ${styles.header} ${isDark ? "dark" : "light"}`}>
      <div className="info">
        <h1 className={styles.title}>NEWS APP</h1>
        <p className={styles.date}>{formatDate(new Date())}</p>
      </div>
      <img
        src={`${isDark ? themeIcons.dark : themeIcons.light}`}
        alt="theme"
        width={30}
        onClick={toggleTheme}
      />
    </header>
  );
}

export default Header;
