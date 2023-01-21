import {createContext,useContext} from 'react';
import useLocalStorage from '../hooks/useLocaleStorage';

const ThemeContext = createContext(),

useTheme = () => useContext(ThemeContext),

ThemeProvider = ({children}) => {

	const [theme,setTheme] = useLocalStorage('theme','light');

    const changeTheme = (e) => {

    	if(theme == "light") setTheme("dark");
    	else setTheme("light");

	}

	const data = {

		theme,
		changeTheme

	}

	return (

		<ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>

	);

}

export default useTheme;
export {ThemeProvider};
