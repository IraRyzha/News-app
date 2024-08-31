import Header from "@/widgets/header/ui/Header/Header.js";
import { useTheme } from "@/app/providers/ThemeProvider.js";
import { Outlet } from "react-router";

function BaseLayout() {
  const { isDark } = useTheme();
  return (
    <div className={`${isDark ? "dark" : "light"}`}>
      <Header />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}

export default BaseLayout;
