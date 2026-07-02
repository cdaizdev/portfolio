import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-xl bg-gray-200 dark:bg-gray-800 transition-colors cursor-pointer">
      {darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-gray-700" />}
    </button>
  );
}

export default DarkModeToggle;