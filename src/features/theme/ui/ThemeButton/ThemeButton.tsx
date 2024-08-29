import { useTheme } from "@/app/providers/ThemeProvider.js";
import { themeIcons } from "@/shared/assets/index.js";

const ThemeButton = () => {
  const { isDark, toggleTheme } = useTheme();
  return (
    <img
      src={`${isDark ? themeIcons.light : themeIcons.dark}`}
      alt="theme"
      width={30}
      onClick={toggleTheme}
    />
  );
};

export default ThemeButton;
