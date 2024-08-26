import { useTheme } from "../../context/ThemeContext.js";
import styles from "./styles.module.css";

interface Props {
  keywords: string;
  setKeywords: (keywords: string) => void;
}

function Search({ keywords, setKeywords }: Props) {
  const { isDark } = useTheme();
  return (
    <div className={`${styles.search} ${isDark ? "dark" : "light"}`}>
      <input
        type="text"
        className={styles.input}
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
      />
    </div>
  );
}

export default Search;
