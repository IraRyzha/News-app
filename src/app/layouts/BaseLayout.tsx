import Header from "@/widgets/header/ui/Header/Header.js";
import { useTheme } from "@/app/providers/ThemeProvider.js";
import MainPage from "@/pages/main/ui/Page.js";

function BaseLayout() {
  const { isDark } = useTheme();
  return (
    <div className={`${isDark ? "dark" : "light"}`}>
      <Header />
      <div className="container">
        <MainPage />
      </div>
    </div>
  );
}

export default BaseLayout;
