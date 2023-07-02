import { useState } from "react";

export function Header() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <nav className="bg-brand text-white font-medium">
      <div className="px-6">
        <div className="flex justify-between text-[0.94rem] font-bold">
          <div className="flex items-center py-4 space-x-4 -ml-2">
            <span className="material-symbols-outlined text-[2rem] -mr-2">
              tab
            </span>
            <a href="#">TabNews</a>
            <a href="#">Relevantes</a>
            <a href="#">Recentes</a>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`${
                darkMode ? "hover:text-yellow-400" : "hover:text-gray-400"
              }`}
            >
              {darkMode ? (
                <span className="material-symbols-outlined text-lg -px-1">
                  light_mode
                </span>
              ) : (
                <span className="material-symbols-outlined text-lg -px-1">
                  mode_night
                </span>
              )}
            </button>
            <a href="#">Login</a>
            <a href="#">Cadastrar</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
