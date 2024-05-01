import { themeIcons } from "@/shared/assets";
import { useTheme } from "@/app/providers/ThemeProvider";
import styles from "./styles.module.css";

const ThemeButton = () => {
  const { isDark, toggleTheme } = useTheme();
  return (
    <img
      className={styles.themeButton}
      width={36}
      height={36}
      onClick={toggleTheme}
      src={isDark ? themeIcons.light : themeIcons.dark}
      alt="theme"
      style={{ backgroundColor: isDark ? "grey" : "" }}
    />
  );
};

export default ThemeButton;
