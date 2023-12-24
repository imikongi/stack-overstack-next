'use client'

import React, {createContext, useContext, useEffect, useState} from "react";

interface IThemeContext {
    mode: string;
    setMode: (mode: string) => void
}

const ThemeContext = createContext<IThemeContext | undefined>(undefined)


export function ThemeProvider({children}: {children: React.ReactNode }){
    const [mode, setMode] = useState('light')

    const themeHandler =() => {
            if(localStorage.theme === 'dark' ||
                (!('theme' in localStorage)) && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                document.documentElement.classList.remove('light')
                document.documentElement.classList.add('dark')
                setMode('dark')
            } else if(localStorage.theme === 'light' || (!('theme' in localStorage)) && window.matchMedia('(prefers-color-scheme: light)').matches){
                document.documentElement.classList.remove('dark')
                document.documentElement.classList.add('light')
                setMode('light')
            }

    }

    useEffect(() => {
        themeHandler()
    }, [mode]);


    return (
        <ThemeContext.Provider value={{mode, setMode}}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    const context = useContext(ThemeContext)

    if(context === undefined){
        throw new Error('useTheme must be used within ThemeProvider')
    }

    return context
}