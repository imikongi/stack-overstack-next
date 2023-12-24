'use client'

import React, {createContext, useContext, useEffect, useState} from "react";

interface IThemeContext {
    mode: string;
    setMode: (mode: string) => void
}

const ThemeContext = createContext<IThemeContext | undefined>(undefined)


export function ThemeProvider({children}: {children: React.ReactNode }){
    const [mode, setMode] = useState('')

    useEffect(() => {
        const themeHandler = () => {
            if(mode === 'light'){
                setMode('dark')
                document.documentElement.classList.add('dark')
            } else {
                setMode('light')
                document.documentElement.classList.add('light')
            }
        }

        themeHandler()
    }, [mode])


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