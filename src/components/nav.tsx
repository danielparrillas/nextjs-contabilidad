import { cn } from "@/lib/utils";
import DarkModeButton from "./dark-mode-button";

export default function Nav() {
  return (
    <nav className="flex items-center space-x-4 lg:space-x-6 w-full justify-between p-2 bg-white dark:bg-gray-900 sticky top-0 z-10 overflow-hidden border-b-0">
      <p className="font-bold text-xl flex gap-1">
        <span className="rounded-md text-lg p-[2px] px-2 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 uppercase">
          Dineros
        </span>
      </p>
      <div className="flex gap-4 w-full">
        <a className="text-sm font-medium transition-colors hover:text-primary">
          Home
        </a>
        {/* <a className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
          Documentación
        </a> */}
      </div>
      <DarkModeButton />
    </nav>
  );
}
