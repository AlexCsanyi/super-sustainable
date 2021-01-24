import Header from './header'
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "react-feather";
import { useRouter } from 'next/router';

export default function Nav() {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === "light" ? "dark" : "light");
    }
  };

  return (
    <div className='flex justify-between h-10 items-center'>
        <Header />
        <div className="flex items-center">
            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/AlexCsanyi" className="text-primary pr-2 font-bold leading-8 cursor-pointer hover:text-accent">Twitter<span className="text-accent font-extrabold">.</span></a>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/AlexCsanyi" className="text-primary pr-2 font-bold leading-8 cursor-pointer hover:text-accent">GitHub<span className="text-accent font-extrabold">.</span></a>
            {theme === 'light' ? <Moon className="text-accent cursor-pointer" size={32} onClick={switchTheme} /> : <Sun className="text-accent cursor-pointer" size={32} onClick={switchTheme} />}
        </div>
    </div>
  )
}