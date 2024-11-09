import { useEffect, useState } from "react";


const Header = () => {
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setDarkModeEnabled(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkModeEnabled(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const handleThemeToggle = () => {
    const newTheme = !darkModeEnabled;
    setDarkModeEnabled(newTheme);
    document.documentElement.classList.toggle("dark", newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  return (
    <header className="bg-gray-100 dark:bg-gray-950 h-12">
      <div className="flex items-center h-full justify-between mx-auto max-w-7xl py-1 sm:px-6 lg:px-8">
        <h1 className="text-lg font-bold text-gray-600 dark:text-gray-300">Markdown Editor</h1>
        <button onClick={handleThemeToggle} className="cursor-pointer text-xl">
          {darkModeEnabled ? "☀️" : "🌚"}
        </button>
      </div>
    </header>
  );
};

export default Header;
