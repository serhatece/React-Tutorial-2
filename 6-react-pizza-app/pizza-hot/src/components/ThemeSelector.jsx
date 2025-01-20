import { useContext } from "react";
import "./ThemeSelector.css";
import { ThemeContext } from "../context/ThemeContext";

const themeColors = [
  "primary",
  "secondary",
  "success",
  "danger",
  "warning",
  "info",
  "dark",
  "link",
];

export default function ThemeSelector() {
  const { setColor } = useContext(ThemeContext);

  return (
    <div className="container theme-selector">
      <div className="theme-links">
        {themeColors.map((color) => (
          <span
            key={color}
            className={`bg-${color}`}
            onClick={() => setColor(color)}
          ></span>
        ))}
      </div>
    </div>
  );
}
