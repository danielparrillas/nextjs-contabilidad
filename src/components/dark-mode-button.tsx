"use client";
import useDarkMode from "@/hooks/useDarkMode";

export default function DarkModeButton() {
  const [darkModeOn, setDarkModeOn] = useDarkMode();

  return (
    <button
      onClick={() => setDarkModeOn(!darkModeOn)}
      className="text-xl bg-slate-200 dark:bg-slate-800 rounded-md p-1 grid place-content-center hover:shadow-md dark:shadow-slate-800 transition-colors"
    >
      {darkModeOn ? "☀️" : "🌑"}
    </button>
  );
}
