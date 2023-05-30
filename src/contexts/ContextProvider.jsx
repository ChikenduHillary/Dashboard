import { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false
};

export const ContextProvider = ({children}) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
    const [screenSize, setScreenSize] = useState(undefined);
    const [currentColor, setCurrentColor] = useState('#03C9D7')
    const [currentMode, setCurentMode] = useState('Light');
    const [themeSettings, setThemeSettings] = useState(false);

    const setMode = e => {
        setCurentMode(e.target.value);
        localStorage.setItem('themeMode', e.target.value);
        setThemeSettings(false);
    }

    const setColor = color => {
        setCurrentColor(color);
        localStorage.setItem('colorMode', color);
        setThemeSettings(false);
    }

    const getCurrentThemeAndColor = () => {
        const theme = localStorage.getItem('themeMode');
        const color = localStorage.getItem('colorMode');
        return { theme, color }; 
    }

    const handleClickActivate = (clicked) => {
        setIsClicked({...initialState, [clicked]:true })
    }

    const handleClickDeActivate = (clicked) => {
        setIsClicked({...initialState, [clicked]:false })
    }

    return (
        <StateContext.Provider value={{
            activeMenu, setActiveMenu,
            isClicked, setIsClicked,
            handleClickActivate, handleClickDeActivate,
            screenSize, setScreenSize,
            currentColor, setColor, setCurrentColor,
            currentMode, setMode, setCurentMode,
            themeSettings, setThemeSettings,
            getCurrentThemeAndColor
        }}>
            {children}
        </StateContext.Provider>
    )
};

export const useStateContext = () => useContext(StateContext);