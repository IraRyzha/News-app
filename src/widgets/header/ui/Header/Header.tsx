import { useTheme } from "@/app/providers/ThemeProvider.js";
import ThemeButton from "@/features/theme/ui/ThemeButton/ThemeButton.js";
import { formatDate } from "@/shared/helpers/formatDate.js";
import styles from "./styles.module.css";

function Header() {
  const { isDark } = useTheme();
  return (
    <header className={`header ${styles.header} ${isDark ? "dark" : "light"}`}>
      <div className="info">
        <h1 className={styles.title}>NEWS APP</h1>
        <p className={styles.date}>{formatDate(new Date())}</p>
      </div>
      <ThemeButton />
    </header>
  );
}

export default Header;
