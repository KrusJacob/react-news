import { themeIcons } from "@/shared/assets";
import { useTheme } from "@/app/providers/ThemeProvider";

const ThemeButton = () => {
  const { isDark, toggleTheme } = useTheme();
  return (
    <img
      width={34}
      height={34}
      onClick={toggleTheme}
      src={isDark ? themeIcons.light : themeIcons.dark}
      alt="theme"
    />
  );
};

export default ThemeButton;
