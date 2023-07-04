import { useState } from "react";
import { Link } from "@tanstack/router";
import { router } from "../routes";

export function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const activeRoute = router.state.currentLocation.pathname;

  return (
    <nav className="bg-brand text-white font-medium">
      <div className="px-6">
        <div className="flex justify-between text-[0.94rem] font-bold">
          <nav className="flex items-center py-4 space-x-4 -ml-2">
            <span className="material-symbols-outlined text-[2rem] -mr-2">
              tab
            </span>
            <Link to="" className="hover:text-gray-300">
              TabNews
            </Link>
            <Link
              to=""
              className={`${
                activeRoute === "/" && "border-b border-b-white"
              } hover:text-gray-300`}
            >
              Relevantes
            </Link>
            <Link to="" className="hover:text-gray-300">
              Recentes
            </Link>
          </nav>
          <nav className="flex items-center space-x-4">
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
          </nav>
        </div>
      </div>
    </nav>
  );
}
