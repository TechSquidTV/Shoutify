import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../tailwind.config.cjs';
import { useEffect, useState } from 'react';
type defaultScreenSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl';
type Screens = {
  [key in defaultScreenSize]: string;
};
const tailwindConfigResolved = resolveConfig(tailwindConfig);
const screenSizes = tailwindConfigResolved.theme?.screens as unknown as Screens;

// Inspired by https://juhanajauhiainen.com/posts/how-to-implement-usemediaquery-hook-in-react
export function useTailWindResponsive(query: defaultScreenSize): boolean {
  const inputQueryMapped = screenSizes[query];
  const inputMediaQuery = `(min-width: ${inputQueryMapped})`;
  const [matches, setMatches] = useState<boolean>(false);
  useEffect(() => {
    function handleChange(e: MediaQueryListEvent) {
      setMatches(e.matches);
    }
    const matchQueryList = window.matchMedia(inputMediaQuery);
    setMatches(matchQueryList.matches);

    matchQueryList.addEventListener('change', handleChange);

    return () => {
      matchQueryList.removeEventListener('change', handleChange);
    };
  }, [query]);
  return matches;
}
