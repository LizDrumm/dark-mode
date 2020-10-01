import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';

export const useDarkMode = (key, initialValue) => {

        const [darkMode, setDarkMode] = useLocalStorage(key, initialValue);
        //Again we are deconstructing out the darkmode value
        return [darkMode, setDarkMode];
    };
  
    export default useDarkMode






