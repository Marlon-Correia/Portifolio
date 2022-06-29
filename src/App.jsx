import { ThemeProvider } from 'styled-components';
import {ThemeContextt} from './contexts/theme';
import Home from './components/home/home'
import './index.css';
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { usePersistedState } from './utils/usePersistedState';

const darklTheme = {
  info: 'dark',
  primary: '#2C2C2C',
  secundary: '#313131',
  color: '#fff',
  colorSec: '#fff'
}
const lightTheme = {
  info: 'light',
  primary: '#fff',
  secundary: '#F7F7F7',
  color: '#000',
  colorSec: '#000'
}
function App() {
  const [theme, setTheme] = usePersistedState('theme', lightTheme)

  const handleSwitchMode = () => {
    setTheme(theme.info === 'light' ? darklTheme : lightTheme)
  }

  function UpScreen () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
  }

  function handleButtonScroll () {
    if(window.scrollY === 0 ? document.querySelector(".scrollButton").style.display = 'none' : document.querySelector(".scrollButton").style.display = 'block');
    
  }
  window.addEventListener('scroll', handleButtonScroll)

  return (
    <ThemeContextt.Provider value={{ switchTheme: handleSwitchMode}}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Home />
          <div className='scrollButton' onClick={UpScreen}>
            <BsFillArrowUpCircleFill style={{ color: theme.color}} size={'35'} />
          </div>
        </div>
      </ThemeProvider>
    </ThemeContextt.Provider>
  );
}

export default App;
