import { useTheme } from "@/app/providers/ThemeProvider.js";
import ThemeButton from "@/features/theme/ui/ThemeButton/ThemeButton.js";
import { formatDate } from "@/shared/helpers/formatDate.js";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

function Header() {
  const { isDark } = useTheme();
  return (
    <header className={`header ${styles.header} ${isDark ? "dark" : "light"}`}>
      <div className="info">
        <Link to={"/"}>
          <h1 className={styles.title}>NEWS APP</h1>
        </Link>
        <p className={styles.date}>{formatDate(new Date())}</p>
      </div>
      <ThemeButton />
    </header>
  );
}

export default Header;
